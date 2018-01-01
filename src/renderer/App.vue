<style lang="less">
* {
  transition: all 0.3s ease;
}

::selection {
  background-color: #17a2b8;
  color: #fff;
}

::-webkit-scrollbar {
  width: 0.3rem;
}

html,body {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Microsoft YaHei";
  user-select: none;
  -webkit-app-region: drag;
  overflow: hidden;
}

li,
input,
a,
button,
tr,
thead,
.checkbox,
.img-captcha,
.btn,
.datepicker-overlay,
.btn-task-del {
  -webkit-app-region: no-drag;
}

</style>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-vue-12306'
  }
</script>

