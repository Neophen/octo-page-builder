import TextFullWidth from "./TextFullWidth.vue";
export default TextFullWidth;

export const textFullWidthSettings = {
  id: "text-full-width",
  type: "text-full-width",
  label: "Full width",
  icon: "text-full",
  getData: null,
  highlight: true,
  settings: {
    in_nav: false,
    in_nav_title: "",
    in_nav_id: "",
    spacer: "oct-spacing-block"
  },
  content: {
    text: `
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
    buttons: [
      {
        text: "Sample button",
        type: "link",
        href: "https://www.google.com/"
      }
    ]
  }
};
