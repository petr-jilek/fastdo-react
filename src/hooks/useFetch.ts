import { useState, useEffect } from 'react'
import { type ApiResponse, type FetchModel } from '../api/models'

export interface Props<T> {
  onLoad: () => Promise<ApiResponse<T>>
}

export interface IUseFetch<T> {
  model: FetchModel<T>
  load: () => Promise<void>
}

const useFetch = <T>({ onLoad }: Props<T>): IUseFetch<T> => {
  const [model, setModel] = useState<FetchModel<T>>({ loading: true, response: undefined })

  const load = async (): Promise<void> => {
    try {
      setModel({ loading: true, response: undefined })
      const response = await onLoad()
      if (response.success && response.value) setModel({ loading: false, response })
      setModel({ loading: false, response })
    } catch {
      setModel({
        loading: false,
        response: {
          success: false,
          value: undefined,
          error: undefined
        }
      })
    }
  }

  useEffect(() => {
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { model, load }
}

export default useFetch
