export interface Post {
  id: number
  title: string
  content: string
  author_id: number
  likes: number
  dislikes: number
  rating: number
  published_at: string
  updated_at: string
}

export interface GetPostsResponse {
  posts: Post[]
  total: number
  page: number
  page_size: number
  total_pages: number
}
