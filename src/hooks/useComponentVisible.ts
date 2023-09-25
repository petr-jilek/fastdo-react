import { useState, useEffect, useRef } from 'react'

export default function useComponentVisible(
  initialIsVisible: any,
  onClickOutside = () => {}
): {
  ref: React.MutableRefObject<any>
  isComponentVisible: boolean
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>
} {
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(initialIsVisible)
  const ref = useRef<any>(null)

  useEffect(() => {
    const handleClickOutside = (event: any): void => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsComponentVisible(false)
        onClickOutside()
      }
    }

    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [onClickOutside])

  return { ref, isComponentVisible, setIsComponentVisible }
}
