<template>
  <div class="category-item" :style="{ '--color': category.color }">
    <div class="name-container" @click="collapse = !collapse">
      <CategoryIconVue style="--size: 1rem" :category="category" />
      <span class="name">{{ category.name }}</span>
    </div>
    <div class="matches">
      <div class="match" v-for="match in category.matches" :key="match">
        {{ match }}
      </div>
    </div>
    <!-- <IconPickerVue
      @icon-select="handleIconSelect"
      :collapse="collapse"
      :color="category.color"
    /> -->
  </div>
</template>

<script>
import CategoryIconVue from '../../../components/common/CategoryIcon.vue';
import IconPickerVue from './IconPicker.vue';

export default {
  components: {
    CategoryIconVue,
    IconPickerVue,
  },
  props: {
    category: Object,
  },
  data() {
    return {
      collapse: true,
    };
  },
  methods: {
    handleIconSelect({ iconName, prefix }) {
      this.collapse = true;
      this.category.icon.iconName = iconName;
      this.category.icon.prefix = prefix;
    },
  },
};
</script>

<style lang="scss" scoped>
.category-item {
  --p-color: var(--color, white);
  border-right: 6px solid var(--p-color);
  // border-radius: 5px;
  padding: 13px 20px;
  display: flex;
  flex-flow: column;
  gap: 5px;
  .name-container {
    display: flex;
    align-items: center;
    gap: 10px;
    .name {
      font-weight: bold;
    }
  }
  .matches {
    display: flex;
    flex-flow: row wrap;
    gap: 8px;
    .match {
      font-size: .7rem;
      padding: 2px 8px;
      border-radius: 2rem;
      border: 1px solid var(--p-color);
    }
  }
}
</style>