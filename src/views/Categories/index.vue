<template>
  <div class="p-categories">
    <div class="header">
      <div class="title">
        <component :is="$route.meta.iconCmp" stroke-width="1"></component>
        <span>קטגוריות</span>
      </div>
    </div>
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
import palettes from "nice-color-palettes";
import { mapGetters } from "vuex";
import CategoryListItem from "./components/CategoryListItem.vue";

export default {
  components: {
    CategoryListItem
  },
  data() {
    return {
      icon: {},
      color: "#1CA085"
    };
  },
  computed: {
    ...mapGetters(["categories"]),
    colors() {
      return palettes.slice(0, 7); //[palettes[0], palettes[1], palettes[2]];
    }
  },
  methods: {
    handleClick(category) {
      this.$router.push({ name: "Category View", params: { id: category.id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.p-categories {
  display: flex;
  flex-flow: column;
  position: relative;
  .header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    text-align: start;
    .title {
      font-size: 1rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
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
