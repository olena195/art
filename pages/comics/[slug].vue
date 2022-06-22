<script lang="ts" setup>
import { definePageMeta, queryContent, useAsyncData, useRoute } from "#imports";
import { ElButton, ElCard } from 'element-plus';

definePageMeta({
  layout: 'base'
})

const route = useRoute()
console.log(route.path);
const {data: content} = await useAsyncData(route.path, () => queryContent(route.path).where({_path: route.path}).findOne());

</script>

<template>
<main>
  <el-card tag="main" :body-style="{ padding: '0px' }">

    <div style="padding: 14px">

      <el-button size="small" type="success" v-for="fandomName of content.fandom">{{ fandomName }}</el-button>
      <el-button size="small" type="danger" v-for="pairingName of content.pairing">{{ pairingName }}</el-button>
      <el-button size="small" type="primary" v-for="tagName of content.tag">{{ tagName }}</el-button>

    </div>

    <img v-for="pic of content.comics" :src="pic" :key="pic" />
  </el-card>
</main>
</template>

<style scoped>
main {
  background: white;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}



img {
  width: 100%;
  display: block;
}
</style>
