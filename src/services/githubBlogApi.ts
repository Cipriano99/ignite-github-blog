import { githubApi } from '../api/axios'
import { PostType } from '../types/PostsType'
import { UserType } from '../types/UserType'

import { baseUser } from '../constants/user'

const { repoName, username } = baseUser

export class GitHubBlogApi {
  public async getUserData(): Promise<UserType> {
    const response = await githubApi.get(`/users/${username}`)

    return response.data
  }

  public async getPostList(texto: string): Promise<PostType[] | []> {
    const response = await githubApi.get(
      `/search/issues?q=${texto} repo:${username}/${repoName}`,
    )

    if (!response.data) {
      return []
    }

    return response.data.items
  }

  public async getPostData(postId: string): Promise<PostType> {
    const response = await githubApi.get(
      `/repos/${username}/${repoName}/issues/${postId}`,
    )

    return response.data
  }

  public async getPostBySearch(texto: string): Promise<PostType[] | []> {
    const response = await githubApi.get(
      `/search/issues?q=${texto}%20repo:${username}/${repoName}`,
    )

    if (!response.data) {
      return []
    }

    return response.data.items
  }
}

export const githubBlogApi = new GitHubBlogApi()
