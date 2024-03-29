import { useEffect, useState } from 'react'

export interface IUseHideOnScroll {
  show: boolean
}

const useHideOnScroll = (): IUseHideOnScroll => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = (): void => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false)
      } else {
        // if scroll up show the navbar
        setShow(true)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY])

  return { show }
}

export default useHideOnScroll
