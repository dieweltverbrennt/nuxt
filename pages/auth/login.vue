<script setup lang="ts">
import { useAuthStore } from '~/stores/auth.store'
import { useAPI } from '~/composables/useAPI'
import type { LoginResponse } from '~/interfaces/auth.interface'
const authStore = useAuthStore()

useSeoMeta({
  title: 'Авторизация',
  description: 'Авторизация в VoteApp',
  ogDescription: 'Авторизация в VoteApp',
})

const { API_URL } = useAPI()
const email = ref('')
const password = ref('')

const login = async () => {
  const data = await $fetch<LoginResponse>(`${API_URL}/auth/login`, {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value,
    },
  })
  authStore.setData(data)
  navigateTo('/')
}
</script>

<template>
  <div class="wrapper">
    <div class="login">
      <h2>Вход на платформу</h2>
      <div class="login__field login__email">
        <IconEmail />
        <input v-model="email" type="text" placeholder="Email" />
      </div>
      <div class="login__field login__password">
        <IconPassword />
        <input v-model="password" type="password" placeholder="Пароль" />
      </div>
      <button @click="login" class="login__button">Войти в аккаунт</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login {
  width: 301px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h2 {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  margin: 0 0 27px;
}
.login__field {
  width: 100%;
  border: 1px solid rgba(230, 230, 230, 0.8);
  border-radius: 20px;
  padding: 9px 14px 8px;
  display: flex;
  align-items: center;
}
input {
  width: 100%;
  padding: 0 0 0 9px;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
}
.login__email {
  margin-bottom: 18px;
}
.login__password {
  margin-bottom: 27px;
}
.login__button {
  width: 100%;
  background-color: #191919;
  color: #ffffff;
  height: 41px;
  border-radius: 20px;
  cursor: pointer;
}
</style>
