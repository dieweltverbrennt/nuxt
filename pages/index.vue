<script setup lang="ts">
import type { GetPostsResponse } from '~/interfaces/post.interface'
import { useDebounceFn } from '@vueuse/core'
import { useActionsStore } from '~/store/actions.store'

const actionsStore = useActionsStore()
const config = useRuntimeConfig()
const API_URL = config.public.apiurl
const route = useRoute()
const router = useRouter()
const sort = ref(route.query.sort?.toString() ?? 'date')
const page = ref(route.query.page?.toString() || '1')
const pageSize = ref(route.query.page_size?.toString() ?? '')

const setSort = (type: string) => {
  sort.value = type
}

const setPage = (pageNumber: string) => {
  page.value = pageNumber
}

const query = computed(() => {
  return {
    page: route.query.page ?? 1,
    page_size: route.query.page_size ?? 10,
    sort: route.query.sort || undefined,
  }
})

watch([page, sort], () => {
  changeRoute(page, sort)
})

const changeRoute = useDebounceFn((page, sort) => {
  router.replace({
    query: { page: page.value, sort: sort.value },
  })
}, 100)

const { data, refresh } = useFetch<GetPostsResponse>(API_URL + '/posts', {
  key: 'get-posts',
  query,
})

watch(
  () => actionsStore.actions,
  () => {
    refresh()
  },
  { deep: true },
)

const pages = computed(() => {
  return data.value ? data.value.total_pages : 1
})

const posts = computed(() => {
  return data.value ? data.value.posts : []
})
</script>

<template>
  <div class="main">
    <div class="sort">
      <ul class="sort__list">
        <li
          class="sort__list-item"
          :class="{ 'sort__list-item--active': sort === 'date' }"
          @click="setSort('date')"
        >
          По дате
        </li>
        <li
          class="sort__list-item"
          :class="{ 'sort__list-item--active': sort === 'rate' }"
          @click="setSort('rate')"
        >
          По рейтингу
        </li>
      </ul>
    </div>
    <div class="post__list">
      <PostCard v-for="post in posts" :key="post.id" v-bind="post" />
    </div>
    <div class="pagination" v-if="pages > 1">
      <div
        v-for="item in pages"
        class="pagination__item"
        :class="{ 'pagination__item--active': page === item.toString() }"
        @click="setPage(item.toString())"
      >
        {{ item }}
        <div v-if="item !== pages" class="pagination__divider">|</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 42px 38px 61px 136px;
}
.sort {
  max-width: 692px;
  margin-bottom: 38px;
}
.sort__list {
  display: flex;
  gap: 42px;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 17px;
  padding-left: 0;
  list-style-type: none;
}
.sort__list-item {
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 16px;
  color: #757575;
  cursor: pointer;
}
.sort__list-item--active {
  font-weight: 400;
  color: #292929;
}
.post__list {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.pagination {
  margin-top: 58px;
}
.pagination__item {
  display: flex;
  gap: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  color: #808080;
  cursor: pointer;
}
.pagination__item--active {
  color: #292929;
}
.pagination__divider {
  color: #e6e6e6;
  font-size: 20px;
}
</style>
