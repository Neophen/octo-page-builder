const yargs = require("yargs");
const fs = require("fs");

// Methods
const kebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join("-");

const appendLine = (file, text) => {
  fs.open(file, "a", 666, (e, id) => {
    fs.write(id, text + "\n", null, "utf8", () => {
      fs.close(id, () => {
        console.log(`Updated: ${file}`);
      });
    });
  });
};

const insertLine = (file, text, lineNumber) => {
  const data = fs
    .readFileSync(file)
    .toString()
    .split("\n");

  data.splice(lineNumber, 0, text);
  const output = data.join("\n");

  fs.writeFile(file, output, function(err) {
    if (err) return console.log(err);
  });
};

const addComponentToVuepressConfig = name => {
  const vuepressConfig = "./docs/.vuepress/config.js";
  const line = `                '${name}',`;
  insertLine(vuepressConfig, line, 40);
};

const replaceInFile = async (file, options) => {
  fs.readFile(file, "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }

    let result = data;
    options.forEach(option => {
      result = result.replace(option.search, option.replace);
    });

    fs.writeFile(file, result, "utf8", function(err) {
      if (err) return console.log(err);
      console.log(`Created: ${file}`);
    });
  });
};

// Script

const argv = yargs.help().alias("help", "h").argv;

const name = argv._[0];
const kebabName = kebabCase(name);

const sampleDir = `./src/components/_Sample`;
const componentDir = `./src/components/${name}`;
const componentsIndex = `./src/components/index.js`;

appendLine(componentsIndex, `export { default as ${name} } from "./${name}";`);
addComponentToVuepressConfig(kebabName);

// Create the directory
fs.mkdir(componentDir, { recursive: true }, err => {
  if (err) throw err;
});

// Copy sample files
["index.js", "Sample.spec.js", "Sample.vue"].forEach(async file => {
  const source = `${sampleDir}/${file}`;
  let dest = `${componentDir}/${file}`;

  if (file.startsWith("Sample")) {
    dest = `${componentDir}/${file.replace("Sample", name)}`;
  }

  await fs.copyFile(source, dest, err => {
    if (err) return console.log(err);
  });

  const options = [
    {
      search: /Sample/g,
      replace: name
    }
  ];
  await replaceInFile(dest, options);
});

// create documentation

// create md
const docSample = "./docs/components/_sample.md";
const docDest = `./docs/components/${kebabName}.md`;
fs.copyFile(docSample, docDest, async err => {
  if (err) return console.log(err);

  const options = [
    {
      search: /Sample/g,
      replace: name
    },
    {
      search: /sample/g,
      replace: kebabName
    }
  ];
  await replaceInFile(docDest, options);
});

// create component doc
const docComponentSample = "./docs/.vuepress/components/examples/a-doc.vue";
const docComponentDest = `./docs/.vuepress/components/examples/${kebabName}-doc.vue`;

fs.copyFile(docComponentSample, docComponentDest, async err => {
  if (err) return console.log(err);

  const options = [
    {
      search: /Sample/g,
      replace: name
    },
    {
      search: /sample/g,
      replace: kebabName
    }
  ];
  await replaceInFile(docComponentDest, options);
});
