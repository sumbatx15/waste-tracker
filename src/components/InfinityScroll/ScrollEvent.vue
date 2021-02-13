<template>
  <div ref="container" class="infinity-scroll">
    <div class="infinity-scroll-items-container">
      <slot> </slot>
      <div ref="bottomTrigger" class="bottom-trigger"></div>
      <slot name="loader">
        <div class="loader" v-if="!isFinished">
          Loading...
        </div>
      </slot>
      <slot name="finished">
        <div v-if="isFinished" class="loader">No more items</div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfinityScroll',
  props: {
    isFinished: Boolean,
    bottomOffset: {
      type: Number,
      default: 600
    }
  },
  mounted() {
    this.addListeners();
  },
  destroyed() {
    this.removeListeners();
  },
  methods: {
    handleScroll(ev) {
      if (this.isFinished) return;

      const { scrollHeight, scrollTop, clientHeight } = this.$refs.container;
      const bottomOffest = scrollHeight - (clientHeight + scrollTop);

      if (bottomOffest <= this.bottomOffset) {
        this.$emit('scrolledToBottom');
      }
    },
    addListeners() {
      const infinity = this.$refs.container;
      return infinity.addEventListener('scroll', this.handleScroll);
    },
    removeListeners() {
      const infinity = this.$refs.container;
      return infinity.removeEventListener('scroll', this.handleScroll);
    }
  }
};
</script>

<style lang="scss" scoped>
.infinity-scroll {
  overflow: auto;
}
</style>
