<template>
  <vs-dialog class="dialog" :value="true" @input="$emit('cancel')">
    <h2 class="title">{{ title }}</h2>
    <div class="input-text">{{ message }}</div>
    <template #footer>
      <vs-button v-bind="btnAttrs" block @click="$emit('confirm')">
        אישור
      </vs-button>
    </template>
  </vs-dialog>
</template>

<script>
export default {
  props: {
    title: {
      default: 'מחיקה'
    },
    message: {
      default: 'האם אתה בטוח שאתה רוצה למחוק?'
    },
    type: {
      default: 'danger'
    }
  },
  computed: {
    btnAttrs() {
      return {
        [this.type]: true
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog {
  text-align: center;

  .title {
    margin: 0 auto;
  }
}
</style>
