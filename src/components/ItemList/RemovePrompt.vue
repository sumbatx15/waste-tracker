<template>
    <vs-dialog v-bind="$attrs" v-on="$listeners">
      <template #header>
        <h4 class="not-margin">מחיקה</b></h4>
      </template>
      <div class="input-text">האם אתה בטוח שאתה רוצה למחוק?</div>
      <template #footer>
        <vs-button danger block @click="handleYes">
          אישור
        </vs-button>
      </template>
    </vs-dialog>
</template>

<script>
    export default {
        inheritAttrs: false,
        methods:{
            handleYes(){
                this.$emit('input', false)
                this.$emit('yes')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>