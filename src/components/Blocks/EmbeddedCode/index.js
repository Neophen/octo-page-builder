import EmbeddedCode from "./EmbeddedCode.vue";
export default EmbeddedCode;

export const embeddedCodeSettings = {
  id: "embedded-code",
  type: "embedded-code",
  label: "Embedded code",
  icon: "embed",
  getData: null,
  highlight: true,
  settings: {
    in_nav: false,
    in_nav_title: "",
    in_nav_id: "",
    spacer: "oct-spacing-block"
  },
  content: {
    embed: null
  }
};
