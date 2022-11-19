import styled from 'styled-components'

export const UserProfileContainer = styled.div`
  width: 100%;
  margin-top: -128px;

  display: flex;
  gap: 32px;

  background-color: ${({ theme }) => theme['base-profile']};
  padding: 32px 40px;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    max-width: 166px;
    border-radius: 2rem;
    flex: 1;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
      display: flex;
      justify-content: space-between;

      a {
        color: ${({ theme }) => theme.blue};
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 12px;

        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    p {
      height: 100%;
    }
  }

  .infos {
    width: fit-content;
    display: flex;
    justify-content: center;
    gap: 24px;
    align-items: baseline;

    svg {
      color: ${({ theme }) => theme['base-label']};
    }
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`
