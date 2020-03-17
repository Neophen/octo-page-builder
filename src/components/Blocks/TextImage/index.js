import TextImage from "./TextImage.vue";
export default TextImage;

export const textImageSettings = {
  id: "text-image",
  type: "text-image",
  label: "Text + Image",
  icon: "text-image",
  getData: null,
  highlight: true,
  settings: {
    nav: {
      shouldShow: false,
      title: "",
      id: ""
    },
    spacer: "oct-spacing-block"
  },
  content: {
    text: `
    <h2>Sample header</h2>
    <h3>Sample subheader</h3>
    <p>Text & image block can contain:</p>
    <ul>
    <li>Unlimited text, but we recommend 250 symbols max.</li>
    <li>2 buttons</li>
    <li>1 image</li>
    <li>Bullet lists</li>
    <li><a href="https://www.google.com/" data-link-type="link" target="__blank" rel="noopener noreferrer nofollow">Link</a> to pages or files</li>
    </ul>
    `,
    image: null,
    buttons: [
      {
        text: "Sample button",
        type: "link",
        href: "https://www.google.com/"
      }
    ]
  }
};
