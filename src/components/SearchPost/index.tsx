import { useBlogContext } from '../../hooks/useBlogContext'
import { FormSearch } from '../FormSearch'
import { SearchPostContainer } from './styles'

export const SearchPost = () => {
  const { displayPostList } = useBlogContext()

  const howManyPosts = displayPostList.length

  return (
    <SearchPostContainer>
      <div>
        <label htmlFor="posts">Publicações</label>
        <span>
          {howManyPosts} {howManyPosts !== 1 ? 'publicações' : 'publicação'}
        </span>
      </div>
      <FormSearch />
    </SearchPostContainer>
  )
}
