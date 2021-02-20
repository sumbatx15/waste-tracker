<template>
  <div class="row">
    <div
      v-for="(icon, key) in source.icons"
      :key="key"
      @click="handleClick(icon)"
    >
      <CategoryIconVue
        style="--size: 1.2rem; margin: 1rem 0"
        :category="{ color: 'white', icon }"
      />
    </div>
  </div>
</template>

<script>
import CategoryIconVue from '../../../components/common/CategoryIcon.vue';
export default {
  name: 'item-component',
  components: {
    CategoryIconVue,
  },
  props: {
    index: {
      // index of current item
      type: Number,
    },
    source: {
      // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    handleClick(icon) {
      this.$parent.$parent.$emit('icon-clicked', icon);
    },
  },
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-evenly;
}
</style>