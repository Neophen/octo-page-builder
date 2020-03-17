import TextTwoCols from "./TextTwoCols.vue";
export default TextTwoCols;

export const textTwoColsSettings = {
  id: "text-two-cols",
  type: "text-two-cols",
  label: "Two columns",
  icon: "text-two-col",
  getData: null,
  highlight: true,
  settings: {
    in_nav: false,
    in_nav_title: "",
    in_nav_id: "",
    spacer: "oct-spacing-block"
  },
  content: {
    text_col_1: `
    <h2>Sample header column 1</h2>
    <h3>Sample subheader column 1</h3>
    <p>Text & image block can contain:</p>
    <ul>
    <li>Unlimited text, but we recommend 250 symbols max.</li>
    <li>2 buttons</li>
    <li>1 image</li>
    <li>Bullet lists</li>
    <li><a href="https://www.google.com/" data-link-type="link" target="__blank" rel="noopener noreferrer nofollow">Link</a> to pages or files</li>
    </ul>
    `,
    text_col_2: `
    <h2>Sample header column 2</h2>
    <h3>Sample subheader column 2</h3>
    <p>Text & image block can contain:</p>
    <ul>
    <li>Unlimited text, but we recommend 250 symbols max.</li>
    <li>2 buttons</li>
    <li>1 image</li>
    <li>Bullet lists</li>
    <li><a href="https://www.google.com/" data-link-type="link" target="__blank" rel="noopener noreferrer nofollow">Link</a> to pages or files</li>
    </ul>
    `,
    buttons_col_1: [
      {
        text: "Sample button",
        type: "link",
        href: "https://www.google.com/"
      }
    ],
    buttons_col_2: [
      {
        text: "Sample button",
        type: "link",
        href: "https://www.google.com/"
      }
    ]
  }
};
