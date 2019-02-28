

<template>
  <div class="layout">
    <div class="layout-header">
      <div class="layout-header-menu-handle" @click="toggleMenu" style = "font-size: 30px; color: #363636; margin-top: 10px;">
        <icon v-if="$store.state.ui.menu" name="times" />
        <icon v-else name="bars" />
      </div>
    </div>
    <transition name="slide-left">
      <div class="layout-menu" v-show="$store.state.ui.menu">
        <navigation/>
      </div>
    </transition>
    <div class="layout-content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  import {
    mapMutations
  } from 'vuex'

  export default {
    data() {
      return {
        menuOpened: true,
      }
    },
    methods: {
      ...mapMutations({
        toggleMenu: 'ui/toggleMenu',
      })
    },
    components: {
      'navigation': Navigation,
    },
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
    z-index: 2;
    position: fixed;
    right: 70%;
    bottom: 0;
    left: 0;
    top: 0;
  }

  .layout-header {
    z-index: 99;
    background-color: rgba(0, 0, 0, 0);
  }

  .layout-header-menu-handle {
    z-index: 99;
    width: 64px;
    height: 64px;
    line-height: 64px;
    text-align: center;
  }
</style>
