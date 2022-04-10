import { RefObject, useEffect, useState } from 'react'

function useObserveElement<T extends RefObject<HTMLElement>>(
  element: T,
  options?: IntersectionObserverInit
) {
  const [observed, setObserved] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setObserved(true)
      } else {
        setObserved(false)
      }
    }, options)

    if (element.current) {
      observer.observe(element.current)
    }

    return () => observer.disconnect()
  }, [element, options])

  return observed
}

export default useObserveElement
