import styled from 'styled-components'

export const PostHeaderContainer = styled.header`
  width: 100%;
  margin-top: -128px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  background-color: ${({ theme }) => theme['base-profile']};
  padding: 32px 40px;
  border-radius: 8px;

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${({ theme }) => theme['text-link']};
      color: ${({ theme }) => theme.blue};

      display: flex;
      align-items: center;
      gap: 4px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .infos {
    display: flex;
    gap: 32px;
    font-size: ${({ theme }) => theme['text-m']};
    color: ${({ theme }) => theme['base-span']};

    .info {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`
