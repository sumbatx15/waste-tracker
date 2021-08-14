<template>
  <div
    v-bind="$attrs"
    v-on="$listeners"
    class="category-item"
    :style="{ '--color': category.color }"
  >
    <div class="name-container" @click="collapse = !collapse">
      <CategoryIconVue style="--size: 1rem" :category="category" />
      <span class="name">{{ category.name }}</span>
    </div>
    <category-matches :category="category" />
  </div>
</template>

<script>
import Chip from "@/components/Chips/Chip.vue";
import CategoryIconVue from "@/components/common/CategoryIcon.vue";
import IconPickerVue from "./IconPicker.vue";
import CategoryMatches from "../../../components/Categories/CategoryMatches.vue";

export default {
  components: {
    CategoryIconVue,
    IconPickerVue,
    Chip,
    CategoryMatches
  },
  props: {
    category: Object
  },
  data() {
    return {
      collapse: true
    };
  },
  methods: {
    handleIconSelect({ iconName, prefix }) {
      this.collapse = true;
      this.category.icon.iconName = iconName;
      this.category.icon.prefix = prefix;
    }
  }
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
}
</style>
