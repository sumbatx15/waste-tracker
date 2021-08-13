<template>
     <vs-dialog v-model="isOpen">
      <template #header>
        <h4 class="not-margin">הוסף מוצר</b></h4>
      </template>
    <div v-if="speechAnalyzedItem">
        <div class="input-text">{{speechAnalyzedItem.str}}</div>
      <div class="inputs"> 
        <vs-input v-model="speechAnalyzedItem.name" />
        <vs-input v-model="speechAnalyzedItem.amount" type="number"/>
        <vs-input v-model="speechAnalyzedItem.cost" type="number" />
        <vs-input v-model="speechAnalyzedItem.timestamp" type="date" />
        <vs-input v-model="speechAnalyzedItem.category" />
        <category-picker @select="handleCategorySelect"/>
      </div>
    </div>
      <template #footer>
        <vs-button dark block @click="handleAdd">
          אישור
        </vs-button>
      </template>
    </vs-dialog>
</template>

<script>
import CategoryPicker from '@/components/Categories/CategoryPicker.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    CategoryPicker,
  },
  computed: {
    isOpen: {
      get() {
        return this.$store.state.app.showAddItemDialog;
      },
      set(val) {
        return this.$store.commit('setShowAddItemDialog', val);
      },
    },
    ...mapGetters(['speechAnalyzedItem']),
  },
  methods: {
    handleCategorySelect(category) {
      this.speechAnalyzedItem.category = category.name;
    },
    handleResult(item) {
      item.category = 'כללי';
      item.timestamp = Date.now();
      this.speechAnalyzedItem = item;
      this.active = true;
    },
    handleAdd() {
      this.$store.dispatch('addItem', this.speechAnalyzedItem);
      this.active = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
