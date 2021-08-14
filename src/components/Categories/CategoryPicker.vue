<template>
  <div class="list">
    <div
      :class="['category-chip', { selected: category.name == value }]"
      v-for="category in categories"
      :key="category.name"
      @click="handleClick(category)"
      :style="{ '--color': category.color }"
    >
      <CategoryIcon :category="category" />
      <span class="name">{{ category.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryIcon from "@/components/common/CategoryIcon.vue";
export default {
  props: {
    value: String
  },
  components: {
    CategoryIcon
  },
  computed: {
    ...mapGetters(["categories"])
  },
  methods: {
    handleClick(category) {
      console.log("category:", category);
      this.$emit("input", category.name);
      this.$emit("select", category);
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  > *:not(:last-child) {
    margin-inline-end: 5px;
    margin-block-end: 5px;
  }
  .category-chip {
    --p-color: var(--color, #f61762);
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    border: 1px solid #1d1e20;
    background: #1d1e20;
    border-radius: 50px;
    color: var(--p-color);
    color: white;
    .category-icon {
      width: 1em;
      height: 1em;
      --size: 0.7em;
      padding: 0.1875em;
    }
    > .name {
      padding-inline-start: 5px;
      padding-inline-end: 15px;
    }
    &.selected {
      color: #1d1e20;
      background: var(--p-color);
    }
  }
}
</style>
