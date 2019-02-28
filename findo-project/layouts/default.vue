<template>
    <div class="layout">
        <div class="layout-header">
          <div class="layout-header-menu-handle" @click="toggleMenu"><icon name="bars"/></div>
        </div>
        <div class="layout-menu" v-show="menuOpened">Menu content...</div>
        <div class="layout-content">
            <nuxt/>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
          return {
              menuOpened: true,
          }
      },
    methods: {
    toggleMenu() {
        this.menuOpened = !this.menuOpened
    }
}
  }
</script>

<style>
  .layout-header {
      background-color: #DDD;
      position: fixed; right: 0; top: 0; left: 0; height: 64px;
  }
  .layout-content {
      background-color: #F7F7F7;
      position: fixed; right: 0; bottom: 0; left: 0; top: 64px;
  }
  .layout-content > section { padding: 20px; }
  .layout-menu {
      background-color: #FFF; z-index: 10;
      position: fixed; right: 0; bottom: 0; left: 0; top: 64px;
  }
</style>

