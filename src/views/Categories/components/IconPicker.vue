<template>
  <div class="icon-picker" :class="{ collapse: collapse }">
    <div class="sreach">
      <input type="text" v-model="search" placeholder="enter icon name.." />
    </div>
    <VirtualList
      @icon-clicked="handleIconSelect"
      style="height: 360px; overflow-y: auto"
      class="icons"
      :data-key="'id'"
      :data-sources="filteredIcons"
      :data-component="VirtualListIconVue"
    />
  </div>
</template>

<script>
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
delete fab.faFontAwesomeLogoFull;
delete fas.faFontAwesomeLogoFull;

import VirtualList from "vue-virtual-scroll-list";
import CategoryIconVue from "../../../components/common/CategoryIcon.vue";
import VirtualListIconVue from "./VirtualListIcon.vue";
import { chunk } from "lodash-es";

export default {
  components: {
    CategoryIconVue,
    VirtualList
  },
  props: {
    color: {
      type: String,
      default: () => "#6C838C"
    },
    collapse: Boolean
  },
  data() {
    return {
      VirtualListIconVue,
      icons: { ...fas, ...fab },
      ignoreIcons: ["font-awesome"],
      search: ""
    };
  },
  mounted() {
    // console.log(this.filteredIcons)
  },
  computed: {
    filteredIcons() {
      const icons = Object.values(this.icons);
      const filtered = icons.filter(
        i =>
          i.iconName.includes(this.search) &&
          !this.ignoreIcons.includes(i.iconName)
      );
      return chunk(filtered, 5).map((icons, i) => ({ id: i, icons }));
    }
  },
  methods: {
    handleIconSelect(icon) {
      this.$emit("iconSelect", icon);
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-picker {
  display: flex;
  flex-flow: column;
  padding: 20px;
  gap: 20px;
  opacity: 1;
  overflow: hidden;
  height: 300px;
  transition: all 300ms;
  &.collapse {
    padding: 0px;
    height: 0px;
    opacity: 0;
  }
  .sreach {
    display: flex;
    justify-content: center;
    input {
      direction: ltr;
      border: none;
      border-bottom: 2px solid rgba(255, 255, 255, 0.096);
      background: transparent;
      color: white;
      text-align: center;
    }
  }
  .icons {
    height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    border: 2px solid rgba(0, 0, 0, 0.155);
    border-radius: 15px;
    padding: 1rem;
    .icon {
      align-self: center;
      font-size: 1.7rem;
      width: 1.2em;
      height: 1.2em;
      border-radius: 50%;
      background: red;
    }
  }
}
</style>
