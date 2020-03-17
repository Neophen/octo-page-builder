import ListPeople from "./ListPeople.vue";
export default ListPeople;

export const listPeopleSettings = {
  id: "list-people",
  type: "list-people",
  label: "People list",
  icon: "list-people",
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
