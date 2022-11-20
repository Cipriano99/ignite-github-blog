import { useBlogContext } from '../../hooks/useBlogContext'
import { PostCard } from '../PostCard'
import { PostListContainer } from './styles'

export const PostList = () => {
  const { displayPostList, loadingSearch } = useBlogContext()

  if (loadingSearch) {
    return <PostListContainer>Carregando...</PostListContainer>
  }

  return (
    <PostListContainer>
      {displayPostList.length === 0 ? (
        <p>Nenhum post encontrado</p>
      ) : (
        displayPostList.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            number={post.number}
            createdAt={post.created_at}
          />
        ))
      )}
    </PostListContainer>
  )
}
