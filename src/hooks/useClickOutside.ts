import { useEffect } from 'react'

const useClickOutside = (ref: any, callback: () => void): void => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target)) callback()
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback, ref])
}

export default useClickOutside
