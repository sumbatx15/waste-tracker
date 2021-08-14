<template>
  <div id="app">
    <add-item-dialog v-if="showAddItemDialog" />
    <transition-page>
      <router-view class="view"></router-view>
    </transition-page>
    <navbar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TransitionPage from "./components/Animation/TransitionPage.vue";
import AddItemDialog from "./components/Dialogs/AddItemDialog.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar, TransitionPage, AddItemDialog },
  computed: {
  ...mapGetters(["showAddItemDialog"]),
  },
};
</script>

<style lang="scss">
html,
body {
  direction: rtl;
  margin: 0;
  padding: 0 !important;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  color: white;
  background-color: #1f2224;
  // background-color: #3d4042;
  // background-color: #161618;
  //   background: rgb(22,22,24);
  // background: linear-gradient(90deg, rgba(22,22,24,1) 0%, rgba(37,37,45,1) 100%);
  * {
    font-family: "Poppins", sans-serif;
  }
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;

  > .view {
    flex: 1;
    overflow: auto;
  }

  > .nav {
    direction: ltr;
    display: flex;
    padding: 0.5rem 0;
    justify-content: space-evenly;

    a {
      text-decoration: none;
      color: white;
    }
  }
}

.vs-dialog {
  background: #1f2224 !important;
  color: white !important;
}

.vd-picker__controls-prev,
.vd-picker__controls-next {
  transform: rotate(-180deg);
}
</style>
