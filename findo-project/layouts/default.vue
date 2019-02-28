<template>
  <div class="layout">
    <div class="layout-header">
      <div class="layout-header-menu-handle" @click="toggleMenu">
        <icon v-if="menuOpened" name="times" />
        <icon v-else name="bars" />
      </div>
    </div>
    <transition name="slide-left">
      <div class="layout-menu" v-show="menuOpened">
        <div class="menu-items">
          <nuxt-link v-for="item, i in items" :key="i" :to="item.to" class="menu-item">
            {{ item.label }}
          </nuxt-link>
        </div>
      </div>
    </transition>
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
        items: [
                { to: '/', label: 'Dashboard' },
                { to: { name: 'profile' }, label: 'Profile' },
            ],
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
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    height: 64px;
  }
  
  .layout-content {
    background-color: #F7F7F7;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    top: 64px;
  }
  
  .layout-content>section {
    padding: 20px;
  }
  
  .layout-menu {
    background-color: #FFF;
    z-index: 10;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    top: 64px;
  }
  
  .layout-header-menu-handle {
    width: 64px;
    height: 64px;
    line-height: 64px;
    text-align: center;
  }
</style>

