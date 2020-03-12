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

<style lang="scss">
// DEMO
@font-face {
  font-family: "Gilroy";
  src: url("/fonts/gilroy-extrabold-webfont.woff2") format("woff2"),
    url("/fonts/gilroy-extrabold-webfont.woff") format("woff");
  font-weight: 800;
  font-style: normal;
}

.octo-title {
  border: none;
  margin: 0;
  padding: 0;
}

.container {
  // padding: 1rem;
}

.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: -1rem;
}

[class*="col-"] {
  box-sizing: border-box;
  border-radius: 20px;
  padding: 1rem;
}

.control-box {
  border: 1px dashed black;
  padding: 1rem;
  border-radius: 10px;
}

.col-1 {
  width: 100%;
}

.col-1\/2 {
  width: 50%;
}

.col-1\/3 {
  width: 33.3%;
}

.m-2 {
  margin: 0.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.b-0 {
  border: none;
}

.bg-black {
  background: black;
}

.h-500 {
  height: 500px;
}

.flex {
  display: flex;
  align-items: center;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mr-4 {
  margin-right: 1rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.ml-2 {
  margin-left: 0.5rem;
}
.field {
  margin-bottom: 0.5rem;
}

.octo-form__radio-group {
  display: flex;
  align-items: center;
}

.octo-form__radio-group-item {
  & + .octo-form__radio-group-item {
    margin-left: 1rem;
  }
}
</style>