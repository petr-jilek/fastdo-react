import { useState, useEffect, useRef } from "react"

export default function useComponentVisible(initialIsVisible: any, onClickOutside = () => {}) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const ref = useRef<any>(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsComponentVisible(false)
        onClickOutside()
      }
    }

    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [onClickOutside])

  return { ref, isComponentVisible, setIsComponentVisible }
}
