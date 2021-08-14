<template>
  <vs-dialog v-model="isOpen">
    <add-category-dialog  
      v-if="showAddCategoryDialog"
      v-model="showAddCategoryDialog" 
      :categoryName="categoryName"
      :categoryMatches="[this.item.name]"
    />
    <template #header>
      <h4 class="not-margin">הוסף מוצר</b></h4>
    </template>
    <form @submit.prevent="handleSubmit">
      <div class="add-item-dialog-content" v-if="item">
        <VueDatePicker class="date-picker" v-model="item.timestamp" />
        <div class="speech-analyzed-item">{{ item.str }}</div>
        <div class="inputs">
          <common-input required v-model="item.name" label="שם המוצר" />
          <common-input required v-model.number="item.amount" label="כמות" type="number" />
          <common-input required v-model.number="item.cost" label="עלות" type="number" />
          <common-input required v-model="categoryName" label="קטגוריה" />
          <category-picker class="category-picker" v-model="categoryName" />
        </div>
        <vs-button style="margin-top: 2em" type="submit" dark block >
          אישור
        </vs-button>
      </div>
    </form>
  </vs-dialog>
</template>

<script>
import CategoryPicker from "@/components/Categories/CategoryPicker.vue";
import { VueDatePicker } from "@mathieustan/vue-datepicker";
import { mapGetters } from "vuex";
import { getCategoryByMatcher } from '@/utils'
import AddCategoryDialog from "../../views/Categories/views/AddCategoryDialog.vue";
export default {
  components: {
    CategoryPicker,
    VueDatePicker,
    AddCategoryDialog,
  },
  data() {
    return {
      showAddCategoryDialog: false,
      categoryName: "",
    };
  },
  created(){
    this.categoryName = getCategoryByMatcher(this.categories, this.item.name)?.name
  },
  computed: {
    isOpen: {
      get() {
        return this.$store.state.app.showAddItemDialog;
      },
      set(val) {
        return this.$store.commit("setShowAddItemDialog", val);
      },
    },
    ...mapGetters({
      item: "speechAnalyzedItem",
      categories: "categories",
    }),
    isInputedCategoryExists() {
      return Boolean(this.selectedCategory);
    },
    selectedCategory() {
      return this.categories.find((c) => c.name == this.categoryName);
    },
  },
  methods: {
    addItem() {
      this.$store.dispatch("addItem", {item: this.item, category: this.selectedCategory});
      this.isOpen = false;
    },
    handleSubmit(ev) {
      if (!this.isInputedCategoryExists) {
        return this.showAddCategoryDialog = true
      }
      this.addItem();
    },
  },
};
</script>

<style lang="scss">
.add-item-dialog-content {
  display: flex;
  width: 100%;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  .speech-analyzed-item {
    font-size: 25px;
  }

  .date-picker {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 7px 12px;
  }

  .vs-input-content,
  .vs-input-parent,
  input {
    width: 100%;
  }

  .inputs {
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 0.2em;
  }
  .category-picker{
    margin-top: 0.8em;
  }
}

</style>
