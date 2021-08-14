<template>
  <div style="overflow-y: auto">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    observeSelector: {
      type: String,
      default: ":scope > *"
    }
  },
  data() {
    return {
      observer: null
    };
  },
  mounted() {
    const options = this.options || {
      root: this.$el,
      rootMargin: "-30% 0px -30% 0px"
    };
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.className = "animate__animated animate__pulse";
      } else {
        entry.target.className = "";
      }
    }, options);
    this.observerChildren();
  },
  methods: {
    observerChildren() {
      const children = this.$el.querySelectorAll(this.observeSelector);
      return Array.from(children).forEach(el => this.observer.observe(el));
    }
  }
};
</script>

<style lang="scss" scoped></style>
