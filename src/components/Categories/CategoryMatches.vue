<template>
  <div class="matches">
    <chip
      :removable="removable"
      v-for="match in category.matches"
      @remove="$emit('remove', match)"
      :key="match"
    >
      {{ match }}
    </chip>
  </div>
</template>

<script>
import Chip from "../Chips/Chip.vue";

export default {
  props: {
    stagger: Boolean,
    animDelay: {
      type: Number,
      default: () => 0
    },
    removable: Boolean,
    category: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    Chip
  }
};
</script>

<style lang="scss" scoped>
.matches {
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
}
</style>
