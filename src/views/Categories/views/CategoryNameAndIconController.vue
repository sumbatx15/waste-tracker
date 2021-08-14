<template>
  <div class="category-name-and-icon-controller">
    <div class="name">
      <span
        v-anime="{
          opacity: [0, 1],
          translateY: ['-20px', '0'],
          duration: 500
        }"
        >קטגוריה</span
      >
      <input
        v-anime="{
          delay: 200,
          translateY: ['50px', '0'],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeOutExpo'
        }"
        class="name-input"
        v-model="selectedCategory.name"
        placeholder="הקלד שם.."
      />
    </div>
    <div class="icon-preview">
      <div class="icon" @click="collapse = !collapse">
        <fa icon="image" />
      </div>
      <category-icon
        ref="categoryIcon"
        :category="selectedCategory"
        @click="collapse = !collapse"
      />
      <div class="icon">
        <fa icon="palette" />
        <v-swatches
          show-fallback
          fallback-input-type="color"
          popover-x="left"
          v-model="selectedCategory.color"
          shapes="circles"
        />
      </div>
    </div>
    <icon-picker :collapse="collapse" @iconSelect="handleIconSelect" />
  </div>
</template>

<script>
import CategoryIcon from "../../../components/common/CategoryIcon.vue";
import IconPicker from "../components/IconPicker.vue";
import VSwatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.css";
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  components: {
    CategoryIcon,
    IconPicker,
    VSwatches
  },
  data() {
    return {
      matcher: "",
      collapse: true
    };
  },
  computed: {
    selectedCategory() {
      if (this.category) return this.category;
      return this.$store.getters.categories.find(
        c => c.id == this.$route.params?.id
      );
    },
    hasName() {
      return this.selectedCategory.name;
    },
    nameStyle() {
      if (this.hasName) return;
      return {
        fontWeight: 400,
        color: "gray"
      };
    }
  },
  methods: {
    handleIconSelect({ iconName, prefix }) {
      this.selectedCategory.icon.iconName = iconName;
      this.selectedCategory.icon.prefix = prefix;
      this.collapse = true;
    },
    handleNameInput({ target: { innerText } }) {
      this.selectedCategory.name = innerText;
    }
  }
};
</script>

<style lang="scss">
.category-name-and-icon-controller {
  display: flex;
  flex-flow: column;
  gap: 2rem;
  > .name {
    display: flex;
    flex-flow: column;
    text-align: center;
    align-items: center;

    .name-input {
      text-align: center;
      background: transparent;
      border: none;
      padding: 0;
      box-sizing: border-box;
      max-width: 100%;
      font-size: 2.2rem;
      color: white;
      margin-top: -0.3rem;
    }

    > * {
      font-family: "Assistant", sans-serif !important;
    }

    > :first-child {
      font-size: 0.8rem;
    }

    > :last-child {
      font-weight: bold;
      line-height: 1;
      font-size: 2.2rem;
    }
  }

  .icon-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.35rem;
    gap: 0.7rem;

    .icon {
      display: flex;
      direction: ltr;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      width: 1.8em;
      height: 1.8em;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.075);
      position: relative;

      .vue-swatches__trigger__wrapper {
        direction: ltr;
      }

      .vue-swatches__trigger {
        direction: ltr;

        position: absolute;
        top: -2px;
        opacity: 0;
        left: -6px;
        width: 1.8em !important;
        height: 1.8em !important;
      }
    }
  }
}
</style>
