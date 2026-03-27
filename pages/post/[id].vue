<script setup lang="ts">
import type { Post } from '~/interfaces/post.interface'

const config = useRuntimeConfig()
const API_URL = config.public.apiurl

const route = useRoute()

const postId = route.params.id

const { data } = useFetch<Post>(API_URL + `/posts/${postId}`)

const post = computed(() => {
  return data.value ? data.value : null
})

useSeoMeta({
  title: `Пост - ${data.value?.title}`,
  description: `${data.value?.content}`,
  ogDescription: `${data.value?.content}`,
})
</script>

<template>
  <div class="post">
    <PostCard v-if="post" v-bind="post" />
  </div>
</template>
