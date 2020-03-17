import NewsFeed from "./NewsFeed.vue";
export default NewsFeed;

export const newsFeedSettings = {
  id: "news-feed",
  type: "news-feed",
  label: "News feed",
  icon: "news",
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
