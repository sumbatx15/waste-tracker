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
    ...mapMutations(['setSpeechAnalyzedItem', 'setShowAddItemDialog']),
    handleAnalyzedItem(item) {
      this.setSpeechAnalyzedItem(item);
      this.setShowAddItemDialog(true);
    },
    handleTranscript({ transcript, isFinal }) {
      if (!isFinal) return;
      const item = analyze(transcript) || {};
      const isValidItem = item.name && item.cost;
      console.count('asd');

      isValidItem && this.handleAnalyzedItem(item);
    }
  }
};
</script>

<style lang="scss" scoped></style>
