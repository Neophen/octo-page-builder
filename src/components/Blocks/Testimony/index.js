import Testimony from "./Testimony.vue";
export default Testimony;

export const testimonySettings = {
  id: "testimony",
  type: "testimony",
  label: "Testimony",
  icon: "testimony",
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
