import { createContext, ReactNode, useEffect, useState } from 'react'
import { githubApi } from '../api/axios'
import { UserType } from '../types/UserType'

interface BlogContextProps {
  user: UserType
}

export const BlogContext = createContext({} as BlogContextProps)

export const BlogContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({} as UserType)

  const getUserData = async () => {
    const { data } = await githubApi.get('/users/Cipriano99')

    setUser(data)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <BlogContext.Provider value={{ user }}>{children}</BlogContext.Provider>
  )
}
