<template>
  <div class="p-catefories">
    <div class="title">קטגוריות</div>
    <div class="content">
      <CategoryListItem
        @click="handleClick(category)"
        v-for="category in categories"
        :key="category.name"
        :category="category"
      />
    </div>
  </div>
</template>

<script>
import palettes from 'nice-color-palettes';
import { mapGetters } from 'vuex';
import CategoryListItem from './components/CategoryListItem.vue';

export default {
  components: {
    CategoryListItem,
  },
  data() {
    return {
      icon: {},
      color: '#1CA085',
    };
  },
  computed: {
    ...mapGetters(['categories']),
    colors() {
      return palettes.slice(0, 7); //[palettes[0], palettes[1], palettes[2]];
    },
  },
  methods: {
    handleClick(category) {
      console.log('category:', category)
      this.$router.push({ name: 'Category View', params: { id: category.id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.p-catefories {
  display: flex;
  flex-flow: column;
  position: relative;
  .title {
    position: sticky;
    top: 0;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.253);
  }
  .content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-flow: column;
    gap: 10px;
  }
}
</style>
