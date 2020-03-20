<template>
  <portal to="menu-bubble">
    <editor-menu-bubble
      :editor="editor"
      :keep-in-bounds="false"
      @hide="hideLinkMenu"
      v-slot="{ commands, isActive, menu, getMarkAttrs }"
    >
      <div
        class="menu-bubble"
        :style="`left: ${menu.left}px; top: ${menu.top + 10}px;`"
        :class="{ 'is-active': menu.isActive }"
      >
        <div
          class="menu-bubble__card inline-flex items-center rounded overflow-hidden"
        >
          <button
            class="menu-bubble__btn"
            :class="{ '--active': isActive.heading({ level: 2 }) }"
            @click="
              commands.heading({ level: 2 });
              checkActive();
            "
          >
            <o-icon icon="h1" pack="opb" class="menu-bubble_icon" />
          </button>
          <button
            class="menu-bubble__btn"
            :class="{ '--active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            <o-icon icon="h2" pack="opb" class="menu-bubble_icon" />
          </button>
          <button
            class="menu-bubble__btn"
            :class="{ '--active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <o-icon icon="paragraph" pack="opb" class="menu-bubble_icon" />
          </button>
          <button
            class="menu-bubble__btn"
            :class="{ '--active': isActive.italic() }"
            @click="commands.italic"
          >
            <o-icon icon="italics" pack="opb" class="menu-bubble_icon" />
          </button>
          <button
            class="menu-bubble__btn"
            :class="{ '--active': isActive.bold() }"
            @click="commands.bold"
          >
            <o-icon icon="bold" pack="opb" class="menu-bubble_icon" />
          </button>
          <button
            class="menu-bubble__btn"
            :class="{ '--active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <o-icon icon="list" pack="opb" class="menu-bubble_icon" />
          </button>
          <button
            class="menu-bubble__btn"
            :class="{ '--active': isActive.link() }"
            @click="
              showLinkMenu(getMarkAttrs('link'), isActive.link(), commands.link)
            "
          >
            <o-icon icon="link" pack="opb" class="menu-bubble_icon" />
          </button>
        </div>
        <link-menu
          class="menu-bubble__card"
          v-if="isLinkMenuOpen || isActive.link()"
          :link-command="commands.link"
          :link-attributes="getMarkAttrs('link')"
          @close="hideLinkMenu"
        ></link-menu>
      </div>
    </editor-menu-bubble>
  </portal>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

import { EditorMenuBubble } from "tiptap";

import LinkMenu from "./LinkMenu.vue";

export default {
  name: "MenuBubble",
  components: {
    LinkMenu,
    EditorMenuBubble
  },
  props: {
    editor: null
  },
  setup() {
    const state = reactive({
      isLinkMenuOpen: false,
      linkAttributes: {}
    });

    const hideLinkMenu = () => {
      state.isLinkMenuOpen = false;
      state.linkAttributes = {};
    };

    const showLinkMenu = (attrs, isActive, linkCommand) => {
      if (isActive) {
        linkCommand({ href: null });
        return;
      }
      state.isLinkMenuOpen = true;
      state.linkAttributes = attrs;
    };

    return {
      ...toRefs(state),
      hideLinkMenu,
      showLinkMenu
    };
  }
};
</script>
