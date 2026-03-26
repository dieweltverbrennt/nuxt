<script setup lang="ts">
import type { Post } from '~/interfaces/post.interface'
import { useActionsStore } from '~/store/actions.store'

const config = useRuntimeConfig()
const API_URL = config.public.apiurl
const actionsStore = useActionsStore()
const post = defineProps<Post>()

const reactioned = computed(() => {
  return actionsStore.actions
})

const isActive = (type: 'liked' | 'disliked') => {
  return reactioned.value.some(
    (action) => action.id === post.id && action.action === type,
  )
}

const reaction = (type: 'liked' | 'disliked') => {
  actionsStore.toggleAction({ id: post.id, action: type })
}
</script>

<template>
  <div class="card">
    <div class="card__header">
      <div class="card__avatar">
        <img src="" alt="" class="card__img" />
      </div>
      <div class="card__username">PurpleSchool</div>
      <div class="card__date">4 дня назад</div>
    </div>
    <h3 class="card__title">{{ post.title }}</h3>
    <p class="card__text">
      {{ post.content }}
    </p>
    <div class="card__marks">
      <div
        class="card__like"
        :class="{ 'card__like--active': isActive('liked') }"
        @click="reaction('liked')"
      >
        {{ post.likes }} <IconHandUp />
      </div>
      <div
        class="card__dislike"
        :class="{ 'card__dislike--active': isActive('disliked') }"
        @click="reaction('disliked')"
      >
        {{ post.dislikes }} <IconHandDown />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 692px;
}
.card__header {
  display: flex;
  align-items: center;
}
.card__avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: var(--color-gray);
}
.card__img {
  width: 100%;
}
.card__username {
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 14px;
  margin-right: 17px;
}
.card__date {
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 14px;
}
.card__title {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 22px;
  line-height: 100%;
  margin-bottom: 8px;
}
.card__text {
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 9px;
}
.card__marks {
  display: flex;
  gap: 13px;
}
.card__like {
  display: flex;
  gap: 6px;
  cursor: pointer;
}
.card__like.card__like--active svg {
  fill: #ff6b6b !important;
  stroke: #ff6b6b !important;
}
.card__dislike {
  display: flex;
  gap: 6px;
  cursor: pointer;
}
.card__dislike.card__dislike--active svg {
  fill: #ff6b6b !important;
  stroke: #ff6b6b !important;
}
</style>
