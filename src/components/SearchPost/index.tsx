import { useBlogContext } from '../../hooks/useBlogContext'
import { SearchPostContainer } from './styles'

export const SearchPost = () => {
  const { postList } = useBlogContext()

  const howManyPosts = postList.length

  return (
    <SearchPostContainer>
      <div>
        <label htmlFor="posts">Publicações</label>
        <span>
          {howManyPosts}{' '}
          {howManyPosts === 0 || howManyPosts > 1
            ? 'publicações'
            : 'publicação'}
        </span>
      </div>
      <input type="text" name="posts" placeholder="Buscar conteúdo" />
    </SearchPostContainer>
  )
}
