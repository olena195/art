<script lang="ts" setup>
import { ElButton } from 'element-plus';
import {computed, fetchContentNavigation, queryContent, useAsyncData} from "#imports";


const props = defineProps<{
  fandom?: string[]
  pairing?: string[]
  tags?: string[]
}>();

const {data: allFandoms} = await useAsyncData('fandom', () => {
  return props.fandom && props.fandom.length ? queryContent('fandom').find() : Promise.resolve([]);
});
const {data: allPairings} = await useAsyncData('pairing', () => {
  return props.pairing && props.pairing.length ? queryContent('pairing').find() : Promise.resolve([]);
});

const {data: allTags} = await useAsyncData('tags', () => {
  return props.tags && props.tags.length ? queryContent('tags').find() : Promise.resolve([]);
});

const fandoms = computed(() => allFandoms.value ? allFandoms.value.filter(f => props.fandom && f.title && props.fandom.includes(f.title)) : [])
const pairings = computed(() => allPairings.value ? allPairings.value.filter(f => props.pairing && f.title && props.pairing.includes(f.title)) : [])
const tagsItems = computed(() => allTags.value ? allTags.value.filter(f => props.tags && f.title && props.tags.includes(f.title)) : [])

</script>

<template>
  <div>
    <nuxt-link v-for="i of fandoms" :key="i._path" :to="i._path">
      <el-button class="taxonomy-term" size="small" type="success" >{{ i.title }}</el-button>
    </nuxt-link>
    <nuxt-link v-for="i of pairings" :key="i._path" :to="i._path">
      <el-button class="taxonomy-term" size="small" type="danger" >{{ i.title }}</el-button>
    </nuxt-link>
    <nuxt-link v-for="i of tagsItems" :key="i._path" :to="i._path">
      <el-button class="taxonomy-term" size="small" type="primary" >{{ i.title }}</el-button>
    </nuxt-link>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
  .taxonomy-term {
    margin: 0;
  }
</style>
