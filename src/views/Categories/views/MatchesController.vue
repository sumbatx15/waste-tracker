<template>
  <div class="matches-controller">
    <input
      type="text"
      v-model="matcher"
      placeholder="הוסף מזהים.."
      @keypress.enter="addMatcher"
    />
    <category-matches
      stagger
      :animDelay="1000"
      removable
      @remove="removeMatcher"
      :category="category"
      style="font-size: 1.1rem; justify-content: center"
    />
  </div>
</template>

<script>
import CategoryMatches from "../../../components/Categories/CategoryMatches.vue";
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  components: { CategoryMatches },
  data() {
    return {
      matcher: ""
    };
  },
  methods: {
    addMatcher() {
      this.$store.commit("addMatcher", {
        id: this.category.id,
        matcher: this.matcher
      });
      this.matcher = "";
    },
    removeMatcher(matcher) {
      this.$store.commit("removeMatcher", {
        id: this.category.id,
        matcher
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.matches-controller {
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 20px;
  padding: 0 20px 20px;

  input {
    padding: 5px;
    text-align: center;
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.164);
    background: transparent;
    color: white;
    flex: 1;
  }
}
</style>
