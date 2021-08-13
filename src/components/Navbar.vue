<template>
  <nav class="navbar" dir="ltr">
    <router-link class="link" to="/">
      <HomeIcon />
    </router-link>
    <ItemSpeechAnalyzerBtn
      style="--fs: 0.62rem"
      @item="setSpeechAnalyzedItem"
    />
    <router-link class="link" to="/categories">
      <GridIcon stroke-width="0.5" />
    </router-link>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex';
import ItemSpeechAnalyzerBtn from './SpeechAnalyzerBtn/ItemSpeechAnalyzerBtn.vue';
import { GridIcon, HomeIcon } from 'vue-feather-icons';
export default {
  components: {
    ItemSpeechAnalyzerBtn,
    GridIcon,
    HomeIcon
  },
  methods: {
    ...mapMutations(['setSpeechAnalyzedItem', 'setShowAddItemDialog']),
    handleSpeechAnalyedItem(item) {
      this.setSpeechAnalyzedItem(item);
      this.setShowAddItemDialog(true);
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.5rem;
  .link {
    padding: 1em;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    svg {
      color: white;
      opacity: 0.7;
      stroke-width: 0.5;
    }
    &.router-link-exact-active {
      svg {
        opacity: 1;
        stroke-width: 1;
      }
    }
  }
}
</style>
