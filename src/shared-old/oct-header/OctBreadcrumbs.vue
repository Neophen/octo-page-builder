<template>
  <div>
    SCANORAMA > Archyvas
    <!-- {{ if page:url !== '/' }}
    <nav class="text-white text-sm leading-none md:block hidden font-light">
      {{ nav:breadcrumbs }}
      <a
        href="{{ url }}"
        class="{{ if !is_current }}underline{{ /if }}"
      >{{ title | safe_truncate:40:... }}</a>
      {{ unless last }} &gt; {{ /unless }}
      {{ /nav:breadcrumbs }}
    </nav>
    {{ /if }}-->
  </div>
</template>

<script>
export default {
  name: "OctBreadcrumbs",
  setup() {}
};
</script>
