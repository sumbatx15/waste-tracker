<template>
 
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

}
</style>
