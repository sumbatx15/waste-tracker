<template>
  <VueCtkDateTimePicker
    locale="he"
    range
    dark
    v-model="date"
  ></VueCtkDateTimePicker>
</template>

<script>
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
export default {
  components: { VueCtkDateTimePicker },
  data() {
    return {
      date: {}
    };
  }
};
</script>

<style lang="scss">
.date-time-picker {
  .datepicker-day.between.last .datepicker-day-effect {
    border-radius: 15px 0 0 15px !important;
  }
  .datepicker-day.between.first .datepicker-day-effect {
    border-radius: 0 15px 15px 0 !important;
  }
  .field-input {
    opacity: 0;
  }
}
</style>
