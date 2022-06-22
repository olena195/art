<script setup lang="ts">
import { definePageMeta } from "#imports";
import {ElCard} from "element-plus";

definePageMeta({
  layout: 'base'
})
</script>

<template>
  <el-card class="main">
    <ContentDoc></ContentDoc>
  </el-card>
</template>

<style scoped>
.main {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}



img {
  width: 100%;
  display: block;
}
</style>
