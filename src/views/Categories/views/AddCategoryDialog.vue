<template>
  <vs-dialog :value="true" @input="$emit('input',false)">
    <template #header>
      <h4 class="not-margin">קטגוריה חדשה</b></h4>
    </template>
     <CategoryEditor :category="category"/>
    <vs-button type="submit" dark block @click="handleSubmit" >אישור</vs-button>
  </vs-dialog>
</template>

<script>
import CategoryEditor from "./CategoryEditor.vue";
import {createCategory} from '@/utils'
console.log('createCategory:', createCategory)
export default {
  props: {
    categoryName: String,
    categoryMatches: {
      type: Array,
      default: () => []
    },
  },
  components: {
    CategoryEditor,
  },
  data(){
    return {
      category: null
    }
  },
  created(){
    console.log('created')
    this.category = createCategory({
      name: this.categoryName,
      matches: this.categoryMatches
    })
  },
  methods:{
    handleSubmit(){
      console.log('handleSubmit:')
      this.$store.commit('addCategory', this.category)
      this.$emit('input', false);
    }
  }
};
</script>

<style lang="scss" scoped></style>
