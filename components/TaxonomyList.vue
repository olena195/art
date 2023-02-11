<script lang="ts" setup>


const props = defineProps<{
  fandom?: string[]
  pairing?: string[]
  tags?: string[]
}>();

const allFandoms = await useFandoms()
const allPairings = await usePairing()
const allTags = await useTags()

const fandoms = computed(() => allFandoms ? allFandoms.filter(f => props.fandom && f.title && props.fandom.includes(f.title)) : [])
const pairings = computed(() => allPairings ? allPairings.filter(f => props.pairing && f.title && props.pairing.includes(f.title)) : [])
const tagsItems = computed(() => allTags ? allTags.filter(f => props.tags && f.title && props.tags.includes(f.title)) : [])

</script>

<template>
  <div>
    <nuxt-link class="px-1 py-0.1 bg-green-50 text-green-500 text-xs border opacity-70 hover:opacity-100 rounded border-green-400" v-for="i of fandoms" :key="i._path" :to="i._path" >
      {{ i.title }}
    </nuxt-link>
    <nuxt-link class="px-1 py-0.1 bg-red-50 text-red-500 text-xs border opacity-70 hover:opacity-100 rounded border-red-400" v-for="i of pairings" :key="i._path" :to="i._path" >
      {{ i.title }}
    </nuxt-link>
    <nuxt-link class="px-1 py-0.1 bg-zinc-50 text-zinc-500 text-xs border opacity-70 hover:opacity-100 rounded border-zinc-400" v-for="i of tagsItems" :key="i._path" :to="i._path" >
      {{ i.title }}
    </nuxt-link>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
