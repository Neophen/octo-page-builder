import Newsletter from "./Newsletter.vue";
export default Newsletter;

export const newsletterSettings = {
  id: "newsletter",
  type: "newsletter",
  label: "Newsletter",
  icon: "newsletter",
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
