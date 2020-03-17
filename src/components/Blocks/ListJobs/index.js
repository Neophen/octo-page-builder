import ListJobs from "./ListJobs.vue";
export default ListJobs;

export const listJobsSettings = {
  id: "list-jobs",
  type: "list-jobs",
  label: "Job Opening list",
  icon: "list-jobs",
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
