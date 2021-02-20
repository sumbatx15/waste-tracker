<template>
  <nav class="navbar">
    <div class="start"></div>
    <div class="middle">
      <AnalyzeVue style="--fs: 0.67em" />
      <!-- <div class="box"></div> -->
    </div>
    <div class="end"></div>
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
  bottom: 0;
  font-size: 18px;
  $bg: #161618;
  $bg: #111111;
  $bg: white;
  $bg: #1f2224;
  $h: 5em;
  $bar-pos: 0.2;
  $bar-size: $h * $bar-pos;
  $circle-size: $h * 1;
  $skew: 0%;
  position: relative;
  align-items: flex-end;
  display: flex;
  height: $h;
  width: 100%;
  background: transparent;
  filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.7));
  > * {
    // border: 1px solid red;
  }
  .start {
    height: $bar-size;
    flex: 1 1 100.5%;
    background: $bg;
    clip-path: polygon(0 0%, 100% $skew, 100% 100%, 0% 100%);
  }
  .end {
    flex: 1 1 100.5%;
    height: $bar-size;
    background: $bg;
    clip-path: polygon(0 $skew, 100% 0, 100% 100%, 0% 100%);
  }
  .middle {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    position: absolute;
    left: 50%;
    bottom: 0%;
    border-radius: 100px 100% 0 0 ;
    width: $circle-size;
    height: $circle-size;
    z-index: 1;
    background: $bg;
    transform: translateX(-50%);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.363);
  }
}
</style>