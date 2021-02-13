<template>
  <vs-navbar
    class="navbar"
    shadow
    square
    center-collapsed
    v-model="active"
    :style="navStyle"
  >
    <template #left>
      <vs-button @click="toggleSidebar" flat icon>
        <i class="bx bx-menu"></i>
      </vs-button>
    </template>
    <vs-navbar-item :active="active == 'guide'" id="guide">
      Guide
    </vs-navbar-item>
    <vs-navbar-item :active="active == 'docs'" id="docs">
      Documents
    </vs-navbar-item>
    <vs-navbar-item :active="active == 'components'" id="components">
      Components
    </vs-navbar-item>
    <vs-navbar-item :active="active == 'license'" id="license">
      license
    </vs-navbar-item>
    <template #right>
      <vs-button flat>Login</vs-button>

      <vs-tooltip bottom shadow not-hover v-model="activeTooltip1">
        <vs-avatar
          badge
          badge-color="warn"
          badge-position="top-right"
          @click="activeTooltip1 = !activeTooltip1"
        >
          <img src="/avatars/avatar-5.png" alt="" />
          <template #badge>
            28
          </template>
        </vs-avatar>
        <template #tooltip>
          <div>
            <vs-button @click="activeTooltip1 = false" danger block>
              Delete
            </vs-button>
            <vs-button @click="activeTooltip1 = false" transparent dark block>
              Cancel
            </vs-button>
          </div>
        </template>
      </vs-tooltip>
    </template>
  </vs-navbar>
</template>
<script>
import { mapState } from 'vuex';
import { mutations } from '../store/types';
export default {
  data: () => ({
    active: 'home',
    activeSidebar: false,
    activeTooltip1: false
  }),
  computed: {
    ...mapState(['isOpen']),
    navStyle() {
      return {
        width: this.isOpen ? 'calc(100% - 260px)' : ''
      };
    }
  },
  methods: {
    toggleSidebar() {
      return this.$store.commit(mutations.TOGGLE_ASIDE_MENU);
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  padding: 0.6rem 0;
}
</style>
