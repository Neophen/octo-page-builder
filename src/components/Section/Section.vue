<template>
  <o-h size="2" type="is-muted">{{ title }}</o-h>
</template>

<script>
import { fieldMixin } from "../../utils/fieldMixin.js";
export default {
  name: "OctoFormSection",
  mixins: [fieldMixin]
};
</script>
