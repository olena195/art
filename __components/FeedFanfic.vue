<script lang="ts" setup>


defineProps<{
  _path: string
  title?: string
  excerpt?: any
  fandom?: string[]
  pairing?: string[]
  tags?: string[]
}>();
</script>

<template>
  <nuxt-link class="link-card" :to="_path">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <taxonomy-list style="padding: 14px"
                     :fandom="fandom"
                     :pairing="pairing"
                     :tags="tags"
      />
    </el-card>
  </nuxt-link>
</template>


<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link-card {
  text-decoration: inherit;
  color: inherit;
  max-width: 40rem;
  width: 100%;
  display: block;
}
</style>
