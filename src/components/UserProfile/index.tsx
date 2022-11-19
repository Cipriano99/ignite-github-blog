import { useBlogContext } from '../../hooks/useBlogContext'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLocationArrow,
  FaUsers,
} from 'react-icons/fa'
import { UserProfileContainer } from './styles'

export const UserProfile = () => {
  const { user } = useBlogContext()

  return (
    <UserProfileContainer>
      <img src={user.avatar_url} alt="Imagem de perfil" />

      <div className="wrapper">
        <div>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            GITHUB <FaExternalLinkAlt size={14} />
          </a>
        </div>
        <p>{user.bio}</p>

        <div className="infos">
          <div className="info">
            <FaGithub size={18} />
            {user.login}
          </div>
          <div className="info">
            <FaLocationArrow size={18} />
            {user.location}
          </div>
          <div className="info">
            <FaUsers size={18} />
            {user.followers}
          </div>
        </div>
      </div>
    </UserProfileContainer>
  )
}
