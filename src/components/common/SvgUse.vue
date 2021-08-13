<template>
  <svg height="auto" width="auto">
    <use :href="`${src}#${svgId}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    svgId: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
