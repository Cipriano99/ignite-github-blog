import styled from 'styled-components'

export const SearchPostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    label {
      font-size: 1.125rem;
    }

    span {
      font-size: 0.875rem;
    }
  }

  input {
    width: 100%;
    height: 3.125rem;
    background-color: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};
    border: 0;
    border-radius: 6px;
    padding: 12px 16px;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
