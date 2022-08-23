<script lang="ts" setup>
import {provide, ref} from "#imports";
import {ID_INJECTION_KEY} from 'element-plus';
import {IconMenu} from '@iconify-prerendered/vue-ep'


provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
});

const mobileOpen = ref(false);
</script>
<template>
  <div class="base-root">

    <div class="backdrop" :class="{mobileOpen}" @click="mobileOpen = !mobileOpen"></div>
    <div class="site-nav" :class="{mobileOpen}">
      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen">
        <IconMenu class="mobile-toggle-icon"/>
      </button>
      <site-menu class="menu"/>
    </div>

    <div class="content-wrapper">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

.content-wrapper {
  width: 100%;
}

.base-root {
  min-height: 100vh;
  display: flex;
  background: #f3f6f9;
}

.site-nav {
  width: 100%;
  max-width: 250px;
  background: white;
}

/* MOBILE */
@media (max-width: 700px) {
  .base-root {
    --toggle-nav-height: 3rem;
    --animation-duration: .3s;
    padding-block-end: var(--toggle-nav-height);
  }

  .mobile-toggle {
    width: 100%;
    height: var(--toggle-nav-height);
    border: none;
    background: none;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .mobile-toggle-icon {
    height: 50%;
    width: auto;
    opacity: 0.5;
  }

  .site-nav {
    width: 100%;
    position: fixed;
    max-width: 100%;
    border-top: 1px solid var(--el-menu-border-color);
    bottom: 0;
    transition: transform var(--animation-duration);
    z-index: 5;
  }

  .site-nav:not(.mobileOpen) {
    transform: translateY(calc(100% - var(--toggle-nav-height)))
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0;
    z-index: 4;
    pointer-events: none;
    transition: opacity var(--animation-duration);
  }

  .backdrop.mobileOpen {
    pointer-events: auto;
    opacity: 0.5;
  }
}


/* DESKTOP */
@media (min-width: 700px) {
  .mobile-toggle {
    display: none;
  }

  .site-nav {
    min-width: 250px;
  }

  .backdrop {
    display: none;
  }

  .base-root {
    flex-direction: row;
  }

  .menu {
    height: 100%;
  }
}
</style>
