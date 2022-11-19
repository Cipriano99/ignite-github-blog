import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  FaAngleLeft,
  FaCalendarDay,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { PostType } from '../../types/PostsType'
import { PostHeaderContainer } from './styles'

interface PostHeaderProps {
  postData: PostType
}

export const PostHeader = ({ postData }: PostHeaderProps) => {
  const postedAt = formatDistanceToNow(new Date(postData.created_at), {
    locale: ptBR,
  })

  return (
    <PostHeaderContainer>
      <div className="links">
        <Link to="/">
          <FaAngleLeft size={18} />
          Voltar
        </Link>

        <a href={postData.html_url} target={'_blank'} rel="noreferrer">
          Ver no GitHub <FaExternalLinkAlt size={14} />
        </a>
      </div>

      <h2>{postData.title}</h2>

      <div className="infos">
        <div className="info">
          <FaGithub size={18} />
          {postData?.user?.login}
        </div>
        <div className="info">
          <FaCalendarDay size={18} />
          Há {postedAt}
        </div>
        <div className="info">
          <FaComment size={18} />
          {postData.comments} comentário{postData.comments !== 1 ? 's' : null}
        </div>
      </div>
    </PostHeaderContainer>
  )
}
