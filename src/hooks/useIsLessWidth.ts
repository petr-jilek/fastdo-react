import { useState, useEffect } from 'react'

export interface IUseIsLessWidth {
  isLessWidth: boolean
}

const useIsLessWidth = (width: number, equal = true): IUseIsLessWidth => {
  const [isLessWidth, setIsLessWidth] = useState(false)

  useEffect(() => {
    const handleResize = (): void => {
      if (equal) {
        setIsLessWidth(window.innerWidth <= width)
      } else {
        setIsLessWidth(window.innerWidth < width)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
  }, [equal, width])

  return { isLessWidth }
}

export default useIsLessWidth
