<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="card__header">
      <img src="" alt="" class="card__img" />
      <div class="card__username">PurpleSchool</div>
      <div class="card__date">4 дня назад</div>
    </div>
    <h3 class="card__title">Добавить функцию голосования</h3>
    <p class="card__text">
      Попробовать добавить в приложение функцию голосования, которая позволит
      определить, какая фича более полезна, а какая нет. После добавления поста
      появляется...
    </p>
    <div class="card__marks">
      <div class="card__like">10 <IconHandUp /></div>
      <div class="card__dislike">1 <IconHandDown /></div>
    </div>
  </div>
</template>

<style scoped>
.card__header {
  display: flex;
}
.card__img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
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
}
.card__dislike {
  display: flex;
  gap: 6px;
}
</style>
