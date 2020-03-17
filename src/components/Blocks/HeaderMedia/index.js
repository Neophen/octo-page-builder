import HeaderMedia from "./HeaderMedia.vue";
export default HeaderMedia;

export const headerMediaSettings = {
  id: "header-media",
  type: "header-media",
  label: "Media header",
  icon: "header-media",
  getData: null,
  highlight: true,
  settings: {
    in_nav: false,
    in_nav_title: "",
    in_nav_id: "",
    spacer: "oct-spacing-block"
  },
  title: "A title for your header",
  description: "A description though it is optional",
  image: null,
  video: null,
  button: {
    enabled: true,
    text: "Sample button",
    type: "link",
    href: "https://www.google.com/"
  }
};
