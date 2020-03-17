import ContactUs from "./ContactUs.vue";
export default ContactUs;

export const contactUsSettings = {
  id: "contact-us",
  type: "contact-us",
  label: "Contact form",
  icon: "contact-us",
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
