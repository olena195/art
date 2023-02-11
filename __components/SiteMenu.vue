<script lang="ts" setup>

const navConfig = new Map([
  ['/arts', {title: "Малюнки", showSubmenu: false}],
  ['/comics', {title: "Комікси", showSubmenu: false}],
  ['/fandom', {title: "Фандоми", showSubmenu: true}],
  ['/fanfics', {title: "Фанфіки", showSubmenu: false}],
  ['/pairing', {title: "Перінги", showSubmenu: true}],
  ['/tags', {title: "Теги", showSubmenu: true}],
]);
type MenuItem = { title?: string, navTitle?: string, _path: string, children?: MenuItem[] }
const {data} = await useAsyncData<MenuItem[]>('navigation', () => {
  return fetchContentNavigation();
});

const navigation = computed(() => (data.value || []).map(l => {
  const config = navConfig.get(l._path);
  if (!config) {
    return l;
  }

  l.title = config.title || l.title;
  l.children = config.showSubmenu ? l.children : [];
  return l;
}));
</script>

<template>
  <el-menu
    :default-active="$route.path"
    :router="true"
    class="el-menu-demo"
    mode="vertical"
  >
    <template v-for="link of navigation">
      <el-menu-item v-if="!link.children?.length" :index="link._path">
        <nuxt-link :to="link._path">{{ link.navTitle || link.title }}</nuxt-link>
      </el-menu-item>
      <el-sub-menu v-else :index="link._path">
        <template #title>{{ link.navTitle || link.title }}</template>
        <el-menu-item v-for="childLink of link.children"
                      :key="childLink._path"
                      :index="childLink._path">
          <nuxt-link :to="childLink._path">{{ childLink.navTitle || childLink.title }}</nuxt-link>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style scoped>
.el-menu-item a {
  text-decoration: none;
  color: inherit;
}
</style>
