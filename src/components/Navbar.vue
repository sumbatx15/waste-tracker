<template>
  <nav class="navbar">
    <fa  icon="bars" />
    <AnalyzeVue  style="--fs: 0.62rem" />
    <fa  icon="check" />
  </nav>
</template>

<script>
import AnalyzeVue from './Recorder/Analyze.vue';

export default {
  components: {
    AnalyzeVue,
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  > * {
    // border: 1px solid red;
  }
}
</style>