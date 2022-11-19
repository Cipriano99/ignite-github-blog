import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router'
import { PostHeader } from '../../components/PostHeader'
import { useBlogContext } from '../../hooks/useBlogContext'
import { githubBlogApi } from '../../services/githubBlogApi'
import { PostType } from '../../types/PostsType'
import { PostContainer } from './styles'

export const Post = () => {
  const { id } = useParams()
  const { postList } = useBlogContext()
  const [postData, setPostData] = useState<PostType | null>(null)

  const loadPostData = async () => {
    if (!id) {
      return
    }

    const postOnList = postList.filter((post) => post.number === Number(id))

    if (postOnList.length === 1) {
      setPostData(postOnList[0])
      return
    }

    const response = await githubBlogApi.getPostData(id)

    setPostData(response)
  }

  useEffect(() => {
    loadPostData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (!postData) {
    return <PostContainer>Carregando...</PostContainer>
  }

  return (
    <PostContainer>
      <PostHeader postData={postData} />

      <div className="bodyPost">
        <ReactMarkdown>{postData.body}</ReactMarkdown>
      </div>
    </PostContainer>
  )
}
