<template>
  <div class="category-view" :style="{ '--color': category.color }">
    <nav class="navbar">
      <fa
        v-anime="{
          translateX: ['-20px', '0'],
          duration: 500,
        }"
        icon="chevron-left"
        @click="$router.go(-1)"
      ></fa>
    </nav>
    <div class="content">
      <CategoryEditor :category="category" />
      <item-list />
    </div>
  </div>
</template>

<script>
import CategoryIcon from "../../../components/common/CategoryIcon.vue";
import IconPicker from "../components/IconPicker.vue";
import VSwatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.css";
import ItemList from "@/components/ItemList";
import CategoryEditor from "./CategoryEditor.vue";

export default {
  components: {
    CategoryIcon,
    IconPicker,
    VSwatches,
    ItemList,
    CategoryEditor,
  },
  data() {
    return {
      matcher: "",
      collapse: true,
      categoryId: "",
    };
  },
  created() {
    this.categoryId = this.$route.params?.id;
  },
  computed: {
    category() {
      return this.$store.getters.categories.find(
        (c) => c.id == this.categoryId
      );
    },
  },
};
</script>

<style lang="scss">
.category-view {
  --p-color: var(--color, white);
  border-top: 3px solid var(--p-color);

  .navbar {
    display: flex;
    justify-content: flex-end;
    font-size: 1.2rem;
    padding: 20px;

    svg {
      transform: scaleY(1.3);
    }
  }

  .content {
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

    .add-matches {
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 20px;
      padding: 0 20px 20px;

      input {
        padding: 5px;
        text-align: center;
        border: none;
        border-bottom: 2px solid rgba(0, 0, 0, 0.164);
        background: transparent;
        color: white;
        flex: 1;
      }
    }
  }
}
</style>
