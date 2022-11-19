import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 960px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .bodyPost {
    padding: 40px;

    p {
      img {
        max-width: 100%;
      }
    }
  }
`
