import GridIcons from "./GridIcons.vue";
export default GridIcons;

export const gridIconsSettings = {
  id: "grid-icons",
  type: "grid-icons",
  label: "Icon grid",
  icon: "grid-icons",
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
