<template>
  <div class="wrapper">
    <LayoutSidebar />
    <slot />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 80px 1fr;
  height: 100vh;
}
</style>
