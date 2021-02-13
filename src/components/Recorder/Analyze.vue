<template>
  <Recorder style="--fs:0.8rem" @transcript="handleResult">
    <div slot="tooltip-placeholder">
      מקשיב..
    </div>
  </Recorder>
</template>

<script>
import Recorder from './';
import { analyze } from './analyze';
export default {
  components: {
    Recorder
  },
  methods: {
    handleResult({ transcript, isFinal }) {
      if (!isFinal) return;
      const item = analyze(transcript) || {};
      const validItem = item.name && item.cost;

      validItem && this.$emit('result', item);
    }
  }
};
</script>

<style lang="scss" scoped></style>
