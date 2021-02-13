<template>
  <div class="list">
    <div
      class="category"
      v-for="category in categories"
      :key="category.name"
      @click="$emit('select', category)"
    >
      {{ category.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['categories'])
  }
};
</script>

<style lang="scss" scoped>
.list {
  > *:not(:last-child) {
    margin-inline-end: 5px;
    margin-block-end: 5px;
  }
  .category {
      font-size: 14px;
    display: inline-block;
    background: #1d1e20;
    border-radius: 50px;
    padding: 0 12px;
    color: white;
  }
}
</style>
