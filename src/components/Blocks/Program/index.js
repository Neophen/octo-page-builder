import Program from "./Program.vue";
export default Program;

export const programSettings = {
  id: "program",
  type: "program",
  label: "Program",
  icon: "program",
  getData: null,
  highlight: true,
  settings: {
    in_nav: false,
    in_nav_title: "",
    in_nav_id: "",
    spacer: "oct-spacing-block"
  },
  content: {
    icons: [
      {
        icon: null,
        title: "Icon title",
        description: "Icon description"
      }
    ]
  }
};
