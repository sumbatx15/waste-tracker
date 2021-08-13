<template>
  <SpeechAnalyzerBtn style="--fs: 0.8rem" @transcript="handleTranscript">
    <div slot="tooltip-placeholder">מקשיב..</div>
  </SpeechAnalyzerBtn>
</template>

<script>
import { mapMutations } from 'vuex';
import { analyze } from './analyze';
import SpeechAnalyzerBtn from './';
import { Item } from '@/utils';
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
      const analyzedItem = analyze(transcript) || {};
      const isValidItem = analyzedItem.name && analyzedItem.cost;
      if (!isValidItem) return;

      const item = new Item({ ...analyzedItem, speechStr: analyzedItem.str });
      this.handleAnalyzedItem(item);
    }
  }
};
</script>

<style lang="scss" scoped></style>
