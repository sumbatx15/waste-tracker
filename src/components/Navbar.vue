<template>
  <nav class="navbar">
    <fa icon="bars" />
    <Analyze style="--fs: 0.62rem" @result="handleResult" />
    <fa icon="check" />
  </nav>
</template>

<script>
import Analyze from './Recorder/ItemSpeechAnalyzer.vue';

export default {
  components: {
    Analyze
  }
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
