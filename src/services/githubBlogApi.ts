import { githubApi } from '../api/axios'
import { PostType } from '../types/PostsType'
import { UserType } from '../types/UserType'

export class GitHubBlogApi {
  public async getUserData(username: string): Promise<UserType> {
    const response = await githubApi.get(`/users/${username}`)

    return response.data
  }

  public async getPostList(
    username: string,
    repo: string,
    texto: string,
  ): Promise<PostType[] | []> {
    const response = await githubApi.get(
      `/search/issues?q=${texto} repo:${username}/${repo}`,
    )

    if (!response.data) {
      return []
    }

    return response.data.items
  }

  public async getPostData(
    username: string,
    repo: string,
    postId: string,
  ): Promise<PostType> {
    const response = await githubApi.get(
      `/repos/${username}/${repo}/issues/${postId}`,
    )

    return response.data
  }
}

export const githubBlogApi = new GitHubBlogApi()
