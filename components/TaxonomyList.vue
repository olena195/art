<script lang="ts" setup>
import { ElButton } from 'element-plus';


defineProps<{
  fandom?: string[]
  pairing?: string[]
  tags?: string[]
}>();
</script>

<template>
  <div>
    <el-button size="small" type="success" v-for="fandomName of fandom">{{ fandomName }}</el-button>
    <el-button size="small" type="danger" v-for="pairingName of pairing">{{ pairingName }}</el-button>
    <el-button size="small" type="primary" v-for="tagName of tags">{{ tagName }}</el-button>
  </div>
</template>

<style scoped>

</style>
