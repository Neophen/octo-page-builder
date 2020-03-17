<template>
  <octo-page-builder :page="page"></octo-page-builder>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      page: {
        id: 1,
        title_admin: null,
        locked_at: "2020-03-17 13:23:30",
        locked_by: 1,
        is_locked: true,
        last_edited_by: 1,
        has_footer: true,
        title: { en: "Button" },
        slug: { en: "button" },
        robots_index: 1,
        robots_follow: 1,
        meta_description: null,
        meta_keywords: null,
        area: "core",
        content: {
          en: [
            {
              id: "text-icons",
              type: "text-icons",
              label: "Text + Icons",
              icon: "text-icons",
              getData: null,
              highlight: true,
              settings: {
                in_nav: false,
                in_nav_title: "",
                in_nav_id: "",
                spacer: "oct-spacing-block"
              },
              content: {
                text:
                  '\n    <h2>Sample header</h2>\n    <h3>Sample subheader</h3>\n    <p>Text & image block can contain:</p>\n    <ul>\n    <li>Unlimited text, but we recommend 250 symbols max.</li>\n    <li>2 buttons</li>\n    <li>1 image</li>\n    <li>Bullet lists</li>\n    <li><a href="https://www.google.com/" data-link-type="link" target="__blank" rel="noopener noreferrer nofollow">Link</a> to pages or files</li>\n    </ul>\n    ',
                icons: [
                  {
                    icon: null,
                    title: "Icon title",
                    description: "Icon description"
                  }
                ],
                buttons: [
                  {
                    text: "Sample button",
                    type: "link",
                    href: "https://www.google.com/"
                  }
                ]
              }
            },
            {
              id: "id-en-1",
              type: "text-image",
              content: {
                text:
                  '<h2>Sample header</h2>\n    <h3>Sample subheader</h3>\n    <p>Text & image block can contain:</p>\n    <ul>\n    <li>Unlimited text, but we recommend 250 symbols max.</li>\n    <li>2 buttons</li>\n    <li>1 image</li>\n    <li>Bullet lists</li>\n    <li><a href="https://www.google.com/" data-link-type="link" target="__blank" rel="noopener noreferrer nofollow">Link</a> to pages or files</li>\n    </ul>',
                image: null,
                buttons: [
                  {
                    href: "https://www.google.com/",
                    text: "Sample button",
                    type: "link"
                  }
                ]
              },
              settings: {
                in_nav: false,
                spacer: "oct-spacing-block",
                in_nav_id: null,
                in_nav_title: null
              },
              getData: null,
            }
          ],
          lt: []
        },
        created_at: "2020-02-16 11:17:19",
        updated_at: "2020-02-17 18:10:51"
      }
    });

    return { ...toRefs(state) };
  }
};
</script>
