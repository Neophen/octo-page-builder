<template>
  <div>
    Mobile nav
    <!-- <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" ontoggle="toggleNav()" />
    <label for="openSidebarMenu" class="sidebarIconToggle">
      <span class="spinner diagonal part-1"></span>
      <span class="spinner horizontal"></span>
      <span class="spinner diagonal part-2"></span>
    </label> -->
    <!-- <div id="sidebarMenu">
      <div class="flex items-center justify-center my-8">{{ partial:utils/locales }}</div>
      <ul class="sidebarMenuInner">
        <li>
          {{ partial:nav/site_link link="{{ locale_url }}" text="{
          scanorama_programs:title }" label="go to main page" class="inner-item
          {{ if current_uri === "/" }}active{{ /if }}" }}
        </li>
        {{ nav from="/" is_hidden:isnt="true" }}
        <li>
          {{ partial:nav/site_link :text="title" :link="url" label="go to { title } page" class="inner-item {{ if is_current || is_parent
          }}active{{ /if }}" }}
        </li>
        {{ /nav }}
        <li>{{ partial:nav/site_link_my_account }}</li>
      </ul>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "OctSiteNav",
  setup() {}
};
</script>
