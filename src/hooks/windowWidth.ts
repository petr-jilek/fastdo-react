import { useState, useEffect } from "react"

export default function useIsLessWidth(width: number) {
  const [isLessWidth, setIsLessWidth] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < width) setIsLessWidth(true)
      else setIsLessWidth(false)
    }

    window.addEventListener("resize", handleResize)
    handleResize()
  }, [width])

  return { isLessWidth }
}
