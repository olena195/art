<script lang="ts" setup>
import { provide, ref } from "#imports";
import { ID_INJECTION_KEY } from 'element-plus';
import LogoNuxt from '~icons/codicon/menu';


provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
});

const mobileOpen = ref(false);
</script>
<template>
  <div class="base-root">
    <main>
      <slot/>
    </main>
    <div class="backdrop" :class="{mobileOpen}" @click="mobileOpen = !mobileOpen"></div>
    <div class="site-nav" :class="{mobileOpen}">
      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen">
        <LogoNuxt/>
      </button>
      <site-menu class="menu"/>
    </div>
  </div>
</template>

<style scoped>
.base-root {
  min-height: 100vh;
  display: flex;
}

main {
  flex: 1
}

.site-nav {
  width: 100%;
  max-width: 250px;
}

/* MOBILE */
@media (max-width: 700px) {
  .mobile-toggle {
    width: 100%;
    height: 3rem;
    border: none;
    background: none;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .site-nav {
    width: 100%;
    position: fixed;
    max-width: 100%;
    border-top: 1px solid var(--el-menu-border-color);
    bottom: 0;
    transition: transform .3s;
    z-index: 5;
    background: white;
  }

  .site-nav:not(.mobileOpen) {
    transform: translateY(calc(100% - 3rem))
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
    transition: opacity .3s;
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

  .backdrop {
    display: none;
  }

  .base-root {
    flex-direction: row-reverse;
  }

  .menu {
    height: 100%;
  }
}
</style>
