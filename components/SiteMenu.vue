<script lang="ts" setup>


const {data} = await useAsyncData('navigation', () => {
  return fetchContentNavigation();
});

const config = useAppConfig()

const existingTypes = computed(() => config.content.types.filter(t => (data.value || []).find(n => n._path === `/${t.slug}`)))
const existingTaxonomies = computed(
  () =>
  config.content.taxonomies.reduce((taxs, item) => {
    const navItem = (data.value || []).find(n => n._path === `/${item.slug}`)
    if (navItem) {
      taxs.push({...item, nav: navItem})
    }

    return taxs
  }, [])
)


</script>

<template>
  <div class="vstack gap-3">
    <div class="vstack ">
      <nuxt-link prefetch exact-active-class="bg-sky-400 hover:bg-sky-300" class="px-4 py-3 hover:bg-sky-100"
                 v-for="link of existingTypes" :to="'/'+link.slug" :key="link.slug">{{ link.title }}
      </nuxt-link>
    </div>

    <div class="vstack ">
    <details v-for="taxonomy of existingTaxonomies" :key="taxonomy.slug" >
      <summary class="px-4 py-3 hover:bg-sky-100">{{taxonomy.title}}</summary>
      <div class="pl-3 vstack ">
        <nuxt-link exact-active-class="bg-sky-400 hover:bg-sky-300" class="px-4 py-3 hover:bg-sky-100"
                   v-for="link of taxonomy.nav.children" :to="link._path" :key="link._path">{{ link.title }}
        </nuxt-link>
      </div>
    </details>
  </div>
  </div>
</template>

<style scoped>
/*.el-menu-item a {*/
/*  text-decoration: none;*/
/*  color: inherit;*/
/*}*/
</style>
