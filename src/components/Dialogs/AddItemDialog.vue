<template>
     <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">הוסף מוצר</b></h4>
      </template>
      <div class="input-text">{{item.str}}</div>
      <div class="inputs"> 
        <vs-input v-model="item.name"  />
        <vs-input type="number" v-model="item.amount" />
        <vs-input type="number" v-model="item.cost" />
        <vs-input type="date" v-model="itemDate" />
        <vs-input v-model="item.category" />
        <category-picker @select="handleCategorySelect"/>
      </div>
      <template #footer>
        <vs-button dark block @click="handleAdd">
          אישור
        </vs-button>
      </template>
    </vs-dialog>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
