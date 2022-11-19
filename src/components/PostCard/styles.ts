import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostCardContainer = styled(Link)`
  width: 100%;
  height: 100%;
  max-height: 260px;
  background-color: ${({ theme }) => theme['base-post']};
  color: ${({ theme }) => theme['base-text']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['base-border']};
  }

  .title {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  strong {
    font-size: ${({ theme }) => theme['title-m']};
  }
`
