<template>
  <div class="list">
    <div
      class="category-chip"
      v-for="category in categories"
      :key="category.name"
      @click="$emit('select', category)"
      :style="{ '--color': category.color }"
    >
      <CategoryIcon :category="category" />
      <span class="name">{{ category.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CategoryIcon from '@/components/common/CategoryIcon.vue';
export default {
  components: {
    CategoryIcon,
  },
  computed: {
    ...mapGetters(['categories']),
  },
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
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    border: 2px solid var(--p-color);
    background: #1d1e20;
    background: var(--p-color);
    border-radius: 50px;
    padding-inline-start: 7px;
    color: var(--p-color);
    color: white;
    .category-icon {
      --size: 0.7rem;
    }
    > .name {
      padding-inline-start: 5px;
      padding-inline-end: 15px;
    }
    &.active {
    }
  }
}
</style>
