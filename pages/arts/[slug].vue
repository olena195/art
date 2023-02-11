<script lang="ts" setup>

definePageMeta({
  layout: 'base',

})

const route = useRoute()
const {data: content} = await useAsyncData(route.path, () => queryContent(route.path).where({_path: route.path}).findOne());
const pictures = computed(() => content.value ? Array.isArray(content.value.pictures) ? content.value.pictures : [content.value.pictures] : [])
</script>

<template>
  <main>
    <el-card tag="main" :body-style="{ padding: '0px' }">
      <template #header>
        <div class="card-header">
          <div>
            <el-button size="small" type="success" v-for="fandomName of content.fandom">{{ fandomName }}</el-button>
            <el-button size="small" type="danger" v-for="pairingName of content.pairing">{{ pairingName }}</el-button>
            <el-button size="small" type="primary" v-for="tagName of content.tag">{{ tagName }}</el-button>
          </div>
        </div>
      </template>

      <a title="Відкрити в повному розмірі" target="_blank" v-for="pic of pictures" :key="pic"
         :href="'https://github.com/olena195/blog_kyivska_zefirka/raw/main/public'+pic">
        <img :src="pic"/>
      </a>
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
