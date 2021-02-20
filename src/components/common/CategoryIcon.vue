<template>
  <div v-bind="$attrs" v-on="$listeners" class="category-icon" :style="{ '--color': category.color }">
    <fa :icon="[category.icon.prefix, category.icon.iconName]"></fa>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.category-icon {
  --p-size: var(--size, 0.8rem);
  --p-color: var(--color, #f61762);
  --mult: 1.8;
  --box: calc(var(--p-size) * var(--mult));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--p-size);
  font-weight: bold;
  width: var(--box);
  height: var(--box);
  background: var(--p-color);
  border-radius: var(--box);
  border: 2px solid var(--p-color);
  text-align: center;
  color: #161618;
  svg {
    font-size: 1.2em;
  }
}
</style>
