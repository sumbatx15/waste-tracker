<template>
  <SpeechAnalyzerBtn style="--fs: 0.8rem" @transcript="handleResult">
    <div slot="tooltip-placeholder">מקשיב..</div>
  </SpeechAnalyzerBtn>
</template>

<script>
import SpeechAnalyzerBtn from './';
import { analyze } from './analyze';
export default {
  components: {
    SpeechAnalyzerBtn
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
