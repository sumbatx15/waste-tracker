<template>
  <div class="category-view" :style="{ '--color': category.color }">
    <nav class="navbar">
      <fa icon="chevron-left"></fa>
    </nav>
    <div class="content">
      <div class="name">
        <span>קטגוריה</span>
        <input class="name-input" v-model="category.name"  placeholder="הקלד שם.."/>
      </div>
      <div class="icon-preview">
        <div class="icon" @click="collapse = !collapse">
          <fa icon="image" />
        </div>
        <CategoryIcon :category="category" @click="collapse = !collapse" />
        <div class="icon">
          <fa icon="palette" />
          <VSwatches
            show-fallback
            fallback-input-type="color"
            popover-x="left"
            v-model="category.color"
            shapes="circles"
          />
        </div>
      </div>
      <IconPicker :collapse="collapse" @iconSelect="handleIconSelect" />
    </div>
  </div>
</template>

<script>
import CategoryIcon from '../../../components/common/CategoryIcon.vue';
import ColorPicker from '../components/ColorPicker.vue';
import IconPicker from '../components/IconPicker.vue';
import VSwatches from 'vue-swatches';
import 'vue-swatches/dist/vue-swatches.css';
export default {
  components: {
    CategoryIcon,
    IconPicker,
    ColorPicker,
    VSwatches,
  },
  props: {
    category: {
      type: Object,
      default: () => ({
        name: 'אוכל בחוץ',
        color: '#FE4365',
        icon: {
          prefix: 'fas',
          iconName: 'hamburger',
        },
        matches: ['חשבון חשמל', 'ארנונה', 'מים', 'שכר דירה'],
      }),
    },
  },
  data() {
    return {
      collapse: true,
    };
  },
  computed: {
    hasName() {
      return this.category.name;
    },
    nameStyle() {
      if (this.hasName) return;
      return {
        fontWeight: 400,
        color: 'gray',
      };
    },
  },
  methods: {
    handleIconSelect({ iconName, prefix }) {
      this.category.icon.iconName = iconName;
      this.category.icon.prefix = prefix;
      this.collapse = true;
    },
    handleNameInput({ target: { innerText } }) {
      this.category.name = innerText;
    },
  },
};
</script>

<style lang="scss" >
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
    .name {
      display: flex;
      flex-flow: column;
      text-align: center;
      align-items: center;
      .name-input {
        text-align: center;
        background: transparent;
        border: none;
        padding: 0;
        font-size: 2.2rem;
        color: white;
        margin-top: -0.3rem;
      }
      > * {
        font-family: 'Assistant', sans-serif !important;
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
      --size: 2.25rem;
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
}
</style>