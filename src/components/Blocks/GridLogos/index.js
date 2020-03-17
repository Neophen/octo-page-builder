import GridLogos from "./GridLogos.vue";
export default GridLogos;

export const gridLogosSettings = {
  id: "grid-logos",
  type: "grid-logos",
  label: "Logo grid",
  icon: "grid-logos",
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
