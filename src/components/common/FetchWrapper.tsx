import { type ApiResponse, type ErrorModel } from '../../api/models'
import useFetch from '../../hooks/useFetch'
import CircularProgressPage from '../raw/CircularProgressPage'
import FetchError from './FetchError'

export interface Props<T> {
  loading?: () => any
  error?: (load: () => Promise<void>, error?: ErrorModel) => any
  success: (load: () => Promise<void>, value: T) => any
  onLoad: () => Promise<ApiResponse<T>>
}

export default function FetchWrapper<T>({
  loading = () => <CircularProgressPage />,
  error = undefined,
  success,
  onLoad
}: Props<T>) {
  const { model, load } = useFetch<T>({ onLoad })

  if (model.loading) return loading()
  if (model.response?.success && model.response.value) return success(load, model.response.value)
  if (error) error(load, model.response?.error)
  return <FetchError load={load} />
}
