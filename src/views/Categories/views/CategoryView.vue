<template>
  <div class="category-view" :style="{ '--color': category.color }">
    <nav class="navbar">
      <fa
        v-anime="{
          translateX: ['-20px', '0'],
          duration: 500
        }"
        icon="chevron-left"
        @click="$router.go(-1)"
      ></fa>
    </nav>
    <div class="content">
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
          v-model="category.name"
          placeholder="הקלד שם.."
        />
      </div>
      <div class="icon-preview">
        <div class="icon" @click="collapse = !collapse">
          <fa icon="image" />
        </div>
        <CategoryIcon
          @mount="handleIconMount"
          ref="categoryIcon"
          :category="category"
          @click="collapse = !collapse"
        />
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
      <div class="add-matches">
        <input
          type="text"
          v-model="matcher"
          placeholder="הוסף מזהים.."
          @keypress.enter="addMatcher"
        />
        <category-matches
          stagger
          :animDelay="1000"
          removable
          @remove="handleRemoveMatch"
          :category="category"
          style="font-size: 1.1rem; justify-content: center"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryIcon from '../../../components/common/CategoryIcon.vue';
import IconPicker from '../components/IconPicker.vue';
import CategoryMatches from '../../../components/Categories/CategoryMatches.vue';
import VSwatches from 'vue-swatches';
import 'vue-swatches/dist/vue-swatches.css';

export default {
  components: {
    CategoryIcon,
    IconPicker,
    VSwatches,
    CategoryMatches
  },
  data() {
    return {
      matcher: '',
      collapse: true,
      categoryId: ''
    };
  },
  created() {
    this.categoryId = this.$route.params?.id;
  },
  computed: {
    category() {
      return this.$store.getters.categories.find(c => c.id == this.categoryId);
    },
    hasName() {
      return this.category.name;
    },
    nameStyle() {
      if (this.hasName) return;
      return {
        fontWeight: 400,
        color: 'gray'
      };
    }
  },
  methods: {
    handleIconMount(el) {
      this.$store.commit('setAnimateEnd', {
        el: el,
        clientRect: el.getBoundingClientRect()
      });
    },
    addMatcher() {
      this.$store.commit('addMatcher', {
        id: this.category.id,
        matcher: this.matcher
      });
      this.matcher = '';
    },
    handleRemoveMatch(matcher) {
      console.log('matcher:', matcher);
      this.$store.commit('removeMatcher', {
        id: this.category.id,
        matcher
      });
    },
    handleIconSelect({ iconName, prefix }) {
      this.category.icon.iconName = iconName;
      this.category.icon.prefix = prefix;
      this.collapse = true;
    },
    handleNameInput({ target: { innerText } }) {
      console.log('innerText:', innerText);
      this.category.name = innerText;
      console.log(' this.category:', this.category);
    }
  }
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
        box-sizing: border-box;
        max-width: 100%;
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
