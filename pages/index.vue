<script setup lang="ts">
import type { GetPostsResponse } from '~/interfaces/post.interface'

const config = useRuntimeConfig()
const API_URL = config.public.apiurl

const { data } = useFetch<GetPostsResponse>(API_URL + '/posts')

const posts = computed(() => {
  return data.value ? data.value.posts : []
})
</script>

<template>
  <div class="main">
    <div class="post__list">
      <PostCard v-for="post in posts" :key="post.id" v-bind="post" />
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 38px 38px 61px 136px;
}
.post__list {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
</style>
