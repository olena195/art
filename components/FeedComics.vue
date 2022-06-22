<script lang="ts" setup>
import { ElButton, ElCard } from 'element-plus';

defineProps<{
  fandom?: string[]
  pairing?: string[]
  tag?: string[]
  comics: string[]
  _path: string
}>();
</script>

<template>
  <nuxt-link class="link-card" :to="_path">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="comics[0]" alt=""/>
      <div style="padding: 14px">

        <el-button size="small" type="success" v-for="fandomName of fandom">{{ fandomName }}</el-button>
        <el-button size="small" type="danger" v-for="pairingName of pairing">{{ pairingName }}</el-button>
        <el-button size="small" type="primary" v-for="tagName of tag">{{ tagName }}</el-button>

      </div>
    </el-card>
  </nuxt-link>
</template>


<style scoped>
.link-card {
  text-decoration: inherit;
  color: inherit;
  max-width: 20rem;
  width: 100%;
  display: block;
}


img {
  width: 100%;
  display: block;
}
</style>
