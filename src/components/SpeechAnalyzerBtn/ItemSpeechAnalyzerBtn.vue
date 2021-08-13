<template>
  <SpeechAnalyzerBtn style="--fs: 0.8rem" @transcript="handleTranscript">
    <div slot="tooltip-placeholder">מקשיב..</div>
  </SpeechAnalyzerBtn>
</template>

<script>
import { mapMutations } from 'vuex';
import { analyze } from './analyze';
import SpeechAnalyzerBtn from './';
export default {
  components: {
    SpeechAnalyzerBtn
  },
  methods: {
    ...mapMutations(['setSpeechAnalyzedItem', 'setShowItemDialog']),
    handleAnalyzedItem(item) {
      this.setSpeechAnalyzedItem(item);
      this.setShowItemDialog(true);
    },
    handleTranscript({ transcript, isFinal }) {
      if (!isFinal) return;
      const item = analyze(transcript) || {};
      const isValidItem = item.name && item.cost;

      isValidItem && this.handleAnalyzedItem(item);
    }
  }
};
</script>

<style lang="scss" scoped></style>
