import { createContext, ReactNode, useEffect, useState } from 'react'
import { githubBlogApi } from '../services/githubBlogApi'
import { PostType } from '../types/PostsType'
import { UserType } from '../types/UserType'

interface BlogContextProps {
  user: UserType
  postList: PostType[]
}

export const BlogContext = createContext({} as BlogContextProps)

export const BlogContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({} as UserType)
  const [postList, setPostList] = useState<PostType[] | []>([])

  const getUserData = async () => {
    const data = await githubBlogApi.getUserData()

    setUser(data)
  }

  const getPostList = async () => {
    const postsData = await githubBlogApi.getPostList('')

    setPostList(postsData)
  }

  useEffect(() => {
    getUserData()
    getPostList()
  }, [])

  return (
    <BlogContext.Provider value={{ user, postList }}>
      {children}
    </BlogContext.Provider>
  )
}
