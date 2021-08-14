<template>
  <vs-dialog v-if="category" v-bind="$attrs" v-on="$listeners">
    <template #header>
      <h4 class="not-margin">קטגוריה חדשה</b></h4>
    </template>
     <CategoryNameAndIconController :category="category"/>
     <MatchesController :category="category"/>
    <vs-button type="submit" dark block @click="$emit('input',false)" >אישור</vs-button>
  </vs-dialog>
</template>

<script>
import CategoryNameAndIconController from "./CategoryNameAndIconController.vue";
import MatchesController from "./MatchesController.vue";
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  components: {
    MatchesController,
    CategoryNameAndIconController,
  },
};
</script>

<style lang="scss" scoped></style>
