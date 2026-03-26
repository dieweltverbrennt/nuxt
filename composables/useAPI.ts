export function useAPI() {
  const config = useRuntimeConfig()
  const API_URL = config.public.apiurl

  return { API_URL }
}
