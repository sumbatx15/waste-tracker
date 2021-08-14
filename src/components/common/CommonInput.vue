<template>
  <div class="common-input-container">
    <div class="label">{{ label }}</div>
    <input
      :value="value"
      :class="['input', { focused: isFocused }]"
      @input="emitInput"
      @focus="isFocused = true"
      @blur="isFocused = false"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
    value: [String, Number]
  },
  data() {
    return {
      isFocused: false
    };
  },
  methods: {
    emitInput(ev) {
      this.$emit("input", ev.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.common-input-container {
  direction: inherit;
  position: relative;
  width: 100%;
  margin-top: 10px;
  color: inherit;

  .label {
    color: black;
    position: absolute;
    top: 0;
    font-size: 0.7em;
    padding: 5px 15px 0 0;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 1px;
  }

  .input {
    background: #0c0d0d;
    color: white;
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 20px 15px 5px 15px;
    border: none;
    font-size: 1.1em;
  }
}
</style>
