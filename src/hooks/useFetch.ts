import { useState, useEffect } from "react"
import { ApiResponse, FetchModel } from "../api/models"

export interface Props<T> {
  onLoad: () => Promise<ApiResponse<T>>
}

export default function useFetch<T>({ onLoad }: Props<T>) {
  const [model, setModel] = useState<FetchModel<T>>({ loading: true, response: undefined })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const load = async () => {
    try {
      setModel({ loading: true, response: undefined })
      var response = await onLoad()
      if (response.success && response.value) setModel({ loading: false, response: response })
      setModel({ loading: false, response: response })
    } catch {
      setModel({
        loading: false,
        response: {
          success: false,
          value: undefined,
          error: undefined,
        },
      })
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { model, load }
}
