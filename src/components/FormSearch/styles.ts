import styled from 'styled-components'

export const FormSearchContainer = styled.form`
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
