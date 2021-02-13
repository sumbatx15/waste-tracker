<template>
  <div ref="root" class="infinity-scroll">
    <span class="children-length"
      >$children.length : {{ $children.length }}</span
    >
    <div class="infinity-scroll-items-container">
      <slot> </slot>
      <Observer @intersect="handleIntersect" :options="observerOptions" />
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
import Observer from './Observer';
export default {
  name: 'InfinityScroll',
  props: {
    isFinished: Boolean,
    intersectionOptions: Object,
    bottomOffset: {
      type: String,
      default: '500px'
    }
  },
  components: { Observer },
  computed: {
    observerOptions() {
      if (this.intersectionOptions)
        return { ...this.intersectionOptions, root: this.$refs.root };

      return {
        root: this.$refs.root,
        rootMargin: `0px 0px ${this.bottomOffset} 0px`
      };
    }
  },
  methods: {
    handleIntersect() {
      return this.$emit('scrolledToBottom');
    }
  }
};
</script>

<style lang="scss" scoped>
.infinity-scroll {
  overflow: auto;
  position: relative;
  .children-length {
    z-index: 1;
    top: 0;
    position: sticky;
  }
}
</style>
