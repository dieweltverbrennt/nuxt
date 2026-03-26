import { defineStore } from 'pinia'
import type { User } from '~/interfaces/user.interface'
import type { LoginResponse } from '~/interfaces/auth.interface'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref<string>('')
    const user = ref<User | null>(null)

    const setToken = (data: string) => {
      token.value = data
    }

    const clearToken = () => {
      token.value = ''
    }

    const setUser = (data: User) => {
      user.value = data
    }

    const clearUser = () => {
      user.value = null
    }

    const setData = (data: LoginResponse) => {
      setToken(data.token)
      setUser(data.user)
    }

    return {
      token,
      user,
      clearToken,
      clearUser,
      setData,
    }
  },
  {
    persist: true,
  },
)
