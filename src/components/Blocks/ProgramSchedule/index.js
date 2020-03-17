import ProgramSchedule from "./ProgramSchedule.vue";
export default ProgramSchedule;

export const programScheduleSettings = {
  id: "program-schedule",
  type: "program-schedule",
  label: "Schedule",
  icon: "schedule",
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
