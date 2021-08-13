<template>
  <div id="app">
    <!-- <CategoryIconAnimation v-if="showIconAnimation" />
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/category-view">Category view</router-link>
    </nav> -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      mode="out-in"
    >
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['showIconAnimation'])
  },
  methods: {
    beforeEnter: function(el) {
      el.style.position = 'fixed';
      el.style.width = '100vw';
      el.style.height = '100vh';
      el.style.opacity = '0';
      el.style.transition = 'opacity 200ms';
      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    enter: function(el, done) {
      done();
      el.style.opacity = '1';
      setTimeout(done, 200);
    },
    afterEnter: function(el) {
      el.style.position = '';
      // ...
    },
    enterCancelled: function(el) {
      // ...
    },

    // --------
    // LEAVING
    // --------

    beforeLeave: function(el) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 200,
        easing: 'linear'
      });

      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    leave: function(el, done) {
      setTimeout(done, 200);
    },
    afterLeave: function(el) {
      el.style.position = '';

      // ...
    },
    // leaveCancelled only available with v-show
    leaveCancelled: function(el) {
      // ...
    }
  }
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
  font-family: 'Poppins', sans-serif;
  color: black;
  color: white;
  background-color: white;
  background-color: #1f2224;
  // background-color: #3d4042;
  // background-color: #161618;
  //   background: rgb(22,22,24);
  // background: linear-gradient(90deg, rgba(22,22,24,1) 0%, rgba(37,37,45,1) 100%);
  * {
    font-family: 'Poppins', sans-serif;
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
</style>
