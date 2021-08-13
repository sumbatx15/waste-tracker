<template>
  <div class="recorder-container" v-bind="$attrs">
    <div class="tooltip-container">
      <transition
        enter-active-class="animate__animated animate__slideInUp"
        leave-active-class="animate__animated animate__zoomOutDown"
      >
        <div
          v-if="tooltip.show"
          class="tooltip"
          :class="{ active: tooltip.isValidItem }"
        >
          <span v-if="tooltip.message">{{ tooltip.message }}</span>
          <span v-else style="color: grey">
            <slot name="tooltip-placeholder">{{ placeholder }}</slot>
          </span>
        </div>
      </transition>
    </div>
    <div
      @click="start"
      @contextmenu="() => false"
      :class="['mic', { active: isRecoding }]"
    >
      <div class="circle"></div>
      <i class="fas fa-microphone" style="z-index: 1"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'מה קנית?'
    }
  },
  data() {
    return {
      isRecoding: false,
      tooltip: {
        show: false,
        message: '',
        isValidItem: false,
        timeout: 0
      }
    };
  },
  created() {
    this.recognition = new window.webkitSpeechRecognition();
    this.recognition.lang = 'he-IL'
    this.recognition.interimResults = true;
    this.recognition.continuous = false;
    this.recognition.maxAlternatives = 1;
    this.recognition.addEventListener('result', this.onResult);
    this.recognition.addEventListener('start', () => (this.isRecoding = true));
    this.recognition.addEventListener('end', () => {
      this.isRecoding = false;
      this.tooltip.isEnded = true;
      this.clearTooltip();
    });
  },
  methods: {
    start() {
      if (this.isRecoding) return this.stop();
      this.recognition.start();
      this.tooltip.show = true;
      this.tooltip.message = '';
      clearTimeout(this.tooltip.timeout);
    },
    stop() {
      this.recognition.stop();
      this.tooltip.show = false;
      this.tooltip.message = '';
    },
    onResult(e) {
      const transcript = Array.from(e.results)
        .map(res => res[0])
        .map(res => res.transcript)
        .join('');
      this.tooltip.message = transcript;
      this.$emit('transcript', { transcript, isFinal: e.results[0].isFinal });
    },
    clearTooltip() {
      clearTimeout(this.tooltip.timeout);
      this.tooltip.timeout = setTimeout(() => {
        this.tooltip.show = false;
        this.tooltip.isValidItem = false;
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
$success: rgb(24, 187, 24);
.recorder-container {
  position: relative;
  font-size: var(--fs, 1rem);
  display: flex;
  justify-content: center;
  .tooltip-container {
    pointer-events: none;
    width: 100vw;
    position: absolute;
    top: -10px;
    display: flex;
    justify-content: center;
    transform: translateY(-100%);
    position: absolute;
    .tooltip {
      font-size: 0.8rem;
      padding: 3px 15px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      border-radius: 50px;
      padding: 5px 15px;
      transition: border 100ms;
      &.active {
        border: 2px solid #18bb18;
      }
    }
  }
}
.mic {
  position: relative;
  min-width: 4em;
  min-height: 4em;
  font-size: 1.5em;
  border-radius: 4em;
  box-sizing: border-box;
  display: flex;
  border: 2px solid black;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: all 200ms;
  user-select: none;
  outline: none;
  i {
    font-size: 1.2em;
  }
  .circle {
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0%;
    height: 0%;
    background: $success;
    z-index: 0;
    transition: all 200ms cubic-bezier(1, -0.14, 0.52, 1.04);
  }
  &.active {
    animation: breath 1.5s infinite;
    border: 2px solid $success;
    color: white;
    .circle {
      width: 90%;
      box-shadow: 0 0 35px rgba(0, 0, 0, 0.156);
      background: $success;
      height: 90%;
    }
  }
}
@keyframes breath {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
