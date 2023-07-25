import { type ApiResponse, type ErrorModel } from '../../api/models'
import useDoubleFetch from '../../hooks/useDoubleFetch'
import CircularProgressPage from '../raw/CircularProgressPage'
import FetchError from './FetchError'

export interface Props<T1, T2> {
  loading?: () => any
  error?: (load: () => Promise<void>, error?: ErrorModel) => any
  success: (load: () => Promise<void>, value1: T1, value2: T2) => any
  onSuccess?: (value1: T1, value2: T2) => void
  onLoad1: () => Promise<ApiResponse<T1>>
  onLoad2: (value1: T1) => Promise<ApiResponse<T2>>
}

export default function DoubleFetchWrapper<T1, T2>({
  loading = () => <CircularProgressPage />,
  error = (load, error) => <FetchError error={error} load={load} />,
  success,
  onSuccess = () => {},
  onLoad1,
  onLoad2
}: Props<T1, T2>) {
  const doubleFetch = useDoubleFetch<T1, T2>({ onLoad1, onLoad2 })

  if (doubleFetch.error) return error(doubleFetch.load, doubleFetch.error)

  if (doubleFetch.loading) return loading()

  if (doubleFetch.success) {
    onSuccess(doubleFetch.model1.response?.value!, doubleFetch.model2.response?.value!)
    return success(doubleFetch.load, doubleFetch.model1.response?.value!, doubleFetch.model2.response?.value!)
  }

  return error(doubleFetch.load)
}
