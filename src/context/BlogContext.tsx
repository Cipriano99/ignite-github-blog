import { createContext, ReactNode, useEffect, useState } from 'react'
import { githubBlogApi } from '../services/githubBlogApi'
import { PostType } from '../types/PostsType'
import { UserType } from '../types/UserType'

interface PostListSearchedProps {
  searched: boolean
  list: PostType[] | []
}

interface BlogContextProps {
  user: UserType
  postList: PostType[]
  postListSearched: PostListSearchedProps
  displayPostList: PostType[] | []
  getPostBySearch: (text: string) => void
  loadingSearch: boolean
  isLoadingSearch: (isLoading: boolean) => void
}

export const BlogContext = createContext({} as BlogContextProps)

export const BlogContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({} as UserType)
  const [postList, setPostList] = useState<PostType[] | []>([])
  const [postListSearched, setPostListSearched] =
    useState<PostListSearchedProps>({
      searched: false,
      list: [],
    })
  const [loadingSearch, setLoadingSearch] = useState(false)

  const displayPostList = postListSearched.searched
    ? postListSearched.list
    : postList

  const isLoadingSearch = (isLoading: boolean) => setLoadingSearch(isLoading)

  const getUserData = async () => {
    const data = await githubBlogApi.getUserData()

    setUser(data)
  }

  const getPostList = async () => {
    const postsData = await githubBlogApi.getPostList('')

    setPostList(postsData)
  }

  const getPostBySearch = async (text: string) => {
    if (text === '') {
      setPostListSearched({
        searched: false,
        list: [],
      })

      return
    }

    const searchData = await githubBlogApi.getPostBySearch(text)

    setPostListSearched({
      searched: true,
      list: searchData,
    })
  }

  useEffect(() => {
    getUserData()
    getPostList()
  }, [])

  return (
    <BlogContext.Provider
      value={{
        user,
        postList,
        postListSearched,
        displayPostList,
        getPostBySearch,
        loadingSearch,
        isLoadingSearch,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
