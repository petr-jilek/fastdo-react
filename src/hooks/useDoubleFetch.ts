import { useState, useEffect } from 'react'
import { type ErrorModel, type ApiResponse, type FetchModel } from '../api/models'
import { safeCall } from '../api/utlis'

export interface Props<T1, T2> {
  onLoad1: () => Promise<ApiResponse<T1>>
  onLoad2: (response1: T1) => Promise<ApiResponse<T2>>
}

export interface IDoubleFetch<T1, T2> {
  load: () => Promise<void>
  model1: FetchModel<T1>
  model2: FetchModel<T2>
  loading: boolean
  success: boolean
  error: ErrorModel | undefined
}

const useDoubleFetch = <T1, T2>({ onLoad1, onLoad2 }: Props<T1, T2>): IDoubleFetch<T1, T2> => {
  const [model1, setModel1] = useState<FetchModel<T1>>({ loading: true, response: undefined })
  const [model2, setModel2] = useState<FetchModel<T2>>({ loading: true, response: undefined })

  const getSuccess = (): boolean => {
    if (!model1.response || !model2.response || !model1.response.value || !model2.response.value) return false
    return model1.response.success && model2.response.success
  }

  const load = async (): Promise<void> => {
    const response1 = await safeCall(onLoad1)
    setModel1({ loading: false, response: response1 })
    if (!response1.success || !response1.value) return

    const response2 = await safeCall(() => onLoad2(response1.value!))
    setModel2({ loading: false, response: response2 })
  }

  useEffect(() => {
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    load,
    model1,
    model2,
    success: getSuccess(),
    loading: model1.loading || model2.loading,
    error: model1.response?.error ?? model2.response?.error
  }
}

export default useDoubleFetch
