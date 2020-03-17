import Awards from "./Awards.vue";
export default Awards;

export const awardsSettings = {
  id: "awards",
  type: "awards",
  label: "Awards",
  icon: "awards",
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
