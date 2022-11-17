import { useBlogContext } from '../../hooks/useBlogContext'
import { PostCard } from '../PostCard'
import { PostListContainer } from './styles'

export const PostList = () => {
  const { postList } = useBlogContext()

  return (
    <PostListContainer>
      {postList.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          number={post.number}
          createdAt={post.created_at}
        />
      ))}
    </PostListContainer>
  )
}
