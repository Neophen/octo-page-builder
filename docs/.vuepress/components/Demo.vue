<template>
  <div>
    <component :is="componentName" />
  </div>
</template>

<script>
export default {
  name: "Demo",
  props: {
    componentName: { type: String, required: true }
  }
};
</script>