import { defineStore } from 'pinia'
import type { Post } from '~/interfaces/post.interface'

interface Action {
  id: number
  action: 'liked' | 'disliked'
}

export const useActionsStore = defineStore(
  'actions',
  () => {
    const actions = ref<Action[]>([])

    const addToActions = async (action: Action) => {
      const config = useRuntimeConfig()
      const API_URL = config.public.apiurl

      const data = await $fetch<{ post: Post }>(
        `${API_URL}/post/${action.id}/${action.action === 'liked' ? 'like' : 'dislike'}`,
        {
          method: 'POST',
        },
      )

      actions.value.push(action)
    }

    const removeFromActions = (id: number) => {
      actions.value = actions.value.filter((item) => item.id !== id)
    }

    const toggleAction = (action: Action) => {
      const act = actions.value.find((item) => item.id === action.id)
      if (act) {
        addToActions(action)
      } else {
        removeFromActions(action.id)
      }
    }

    return {
      actions,
      addToActions,
      removeFromActions,
      toggleAction,
    }
  },
  { persist: true },
)
