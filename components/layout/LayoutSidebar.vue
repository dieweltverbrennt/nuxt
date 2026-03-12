<script setup lang="ts"></script>

<template>
  <div class="sidebar">
    <NuxtLink to="/"><IconHome /></NuxtLink>
    <div class="sidebar__logout">
      <img src="" alt="" class="sidebar__profile" />
      <IconLogout />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 43px 28px 21px;
  border-right: 1px solid var(--color-gray);
}

a:hover {
  opacity: 0.8;
}

svg:hover {
  opacity: 0.8;
}
</style>
