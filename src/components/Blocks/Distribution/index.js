import Distribution from "./Distribution.vue";
export default Distribution;

export const distributionSettings = {
  id: "distribution",
  type: "distribution",
  label: "Distribution",
  icon: "distribution",
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
