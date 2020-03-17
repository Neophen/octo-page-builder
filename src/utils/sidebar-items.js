import {
  awardsSettings,
  contactUsSettings,
  distributionSettings,
  embeddedCodeSettings,
  gridIconsSettings,
  gridLogosSettings,
  headerMediaSettings,
  headerSimpleSettings,
  listJobsSettings,
  listPeopleSettings,
  newsFeedSettings,
  newsletterSettings,
  programSettings,
  programScheduleSettings,
  testimonySettings,
  textFullWidthSettings,
  textIconsSettings,
  textImageSettings,
  textTwoColsSettings
} from "../components/Blocks";

export const sidebarItems = [
  {
    type: "page-headers",
    title: "Page Headers",
    isOpen: false,
    blocks: [headerSimpleSettings, headerMediaSettings]
  },
  {
    type: "text-and-media",
    title: "Text & media",
    isOpen: false,
    blocks: [
      textImageSettings,
      textIconsSettings,
      textTwoColsSettings,
      textFullWidthSettings
    ]
  },
  {
    type: "lists-and-grids",
    title: "Lists & Grids",
    isOpen: false,
    blocks: [
      gridIconsSettings,
      gridLogosSettings,
      listPeopleSettings,
      listJobsSettings
    ]
  },
  {
    type: "films-and-schedule",
    title: "Films & Schedule",
    isOpen: false,
    blocks: [programScheduleSettings, programSettings, distributionSettings]
  },
  {
    type: "communication",
    title: "Communication",
    isOpen: false,
    blocks: [newsFeedSettings, newsletterSettings, contactUsSettings]
  },
  {
    type: "other",
    title: "Other",
    isOpen: false,
    blocks: [embeddedCodeSettings, awardsSettings, testimonySettings]
  }
];
