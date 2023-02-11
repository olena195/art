<script lang="ts" setup>
import {IconRoundArrowUpward} from '@iconify-prerendered/vue-ic'
const mobileOpen = ref(false);
</script>
<template>
  <div class="base-root">

    <button class="mobile-toggle fixed bottom-0 bg-light-50" @click="mobileOpen = !mobileOpen">
      <IconRoundArrowUpward class="transition-transform duration-300" :class="{'transform rotate-180': mobileOpen}"/>
    </button>


    <div class="site-nav sm:bg-light-50 <sm:(flex flex-col-reverse)" :class="{mobileOpen}" @click.stop="mobileOpen = false">
      <div class="bg-light-50 py-4" @click.stop>
        <SiteMenu/>
      </div>
    </div>


    <div class="content-wrapper">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

.content-wrapper {
  width: 100%;
  overflow-x: auto;
}

.base-root {
  min-height: 100vh;
  display: flex;
  background: #f3f6f9;
}

.site-nav {
  width: 100%;
  max-width: 250px;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: thin;
}

.mobile-toggle {
  width: 100%;
  height: var(--toggle-nav-height);
  border: none;
  font-size: 1.3rem;
  z-index: 10;
}

/* MOBILE */
@media (max-width: 640px) {
  .base-root {
    --toggle-nav-height: 3rem;
    --animation-duration: .3s;
    padding-block-end: var(--toggle-nav-height);
  }

  .site-nav {
    width: 100%;
    position: fixed;
    max-width: 100%;
    border-top: 1px solid var(--el-menu-border-color);
    bottom: var(--toggle-nav-height);
    height: calc(100vh - var(--toggle-nav-height));
    transition: transform var(--animation-duration);
    z-index: 5;
    padding-block-start: calc(60vh - var(--toggle-nav-height));
  }

  .site-nav:not(.mobileOpen) {
    transform: translateY(100%)
  }
}


/* DESKTOP */
@media (min-width: 640px) {
  .mobile-toggle {
    display: none;
  }

  .content-wrapper {
    overflow-y: auto;
    height: 100vh;
  }



  .site-nav {
    min-width: 250px;
  }

  .base-root {
    flex-direction: row;
  }
}
</style>
