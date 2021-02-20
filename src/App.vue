<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script></script>

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
  > :first-child {
    height: 100%;
    width: 100%;

    overflow: auto;
  }
}
</style>
