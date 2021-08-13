<template>
  <nav class="navbar">
    <fa icon="bars" />
    <ItemSpeechAnalyzerBtn
      style="--fs: 0.62rem"
      @item="setSpeechAnalyzedItem"
    />
    <fa icon="check" />
  </nav>
</template>

<script>
import { mapMutations } from 'vuex';
import ItemSpeechAnalyzerBtn from './SpeechAnalyzerBtn/ItemSpeechAnalyzerBtn.vue';

export default {
  components: {
    ItemSpeechAnalyzerBtn
  },
  methods: {
    ...mapMutations(['setSpeechAnalyzedItem', 'setShowItemDialog']),
    handleSpeechAnalyedItem(item) {
      this.setSpeechAnalyzedItem(item);
      this.setShowItemDialog(true);
    }
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
