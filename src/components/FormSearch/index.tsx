import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useBlogContext } from '../../hooks/useBlogContext'
import { FormSearchContainer } from './styles'

type InputType = {
  textSearch: string
}

export const FormSearch = () => {
  const { getPostBySearch, isLoadingSearch } = useBlogContext()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
  } = useForm<InputType>()

  const onSubmitSearchForm: SubmitHandler<InputType> = ({ textSearch }) => {
    getPostBySearch(textSearch)
  }

  const searchInput = watch('textSearch')

  useEffect(() => {
    if (searchInput === '') {
      getPostBySearch('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput])

  useEffect(() => {
    isLoadingSearch(isSubmitting)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting])

  return (
    <FormSearchContainer onSubmit={handleSubmit(onSubmitSearchForm)}>
      <input
        type="text"
        {...register('textSearch', { required: true })}
        placeholder="Buscar conteúdo"
      />
    </FormSearchContainer>
  )
}
