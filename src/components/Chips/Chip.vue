<template>
  <div class="chip" @click="handleClick">
    <div class="chip-inner">
      <slot>chip</slot>
      <fa v-if="removable" icon="times" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    removable: Boolean,
  },
  methods: {
    handleClick() {
      if (!this.removable) return;
      this.$confirm().then(() => this.$emit('remove'));
    },
  },
};
</script>

<style lang="scss" scoped>
.chip {
  cursor: pointer;
  font-size: 0.7em;
  padding: 0.125em 0.5em;
  border-radius: 2em;
  border: 1px solid var(--color);
  &-inner {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
</style>