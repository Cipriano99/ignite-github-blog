import { formatDistanceToNow } from 'date-fns'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import ptBR from 'date-fns/locale/pt-BR'
import { PostCardContainer } from './styles'

interface PostCardProps {
  title: string
  body: string
  number: number
  createdAt: string
}

export const PostCard: FC<PostCardProps> = ({
  title,
  body,
  number,
  createdAt,
}) => {
  const postedAt = formatDistanceToNow(new Date(createdAt), { locale: ptBR })
  return (
    <PostCardContainer href={`/${number}`}>
      <div className="title">
        <strong>{title}</strong>
        <span>há {postedAt}</span>
      </div>
      <div className="description">
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </PostCardContainer>
  )
}
