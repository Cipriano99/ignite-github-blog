import { PostList } from '../../components/PostList'
import { SearchPost } from '../../components/SearchPost'
import { UserProfile } from '../../components/UserProfile'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <UserProfile />

      <section>
        <SearchPost />
        <PostList />
      </section>
    </HomeContainer>
  )
}
