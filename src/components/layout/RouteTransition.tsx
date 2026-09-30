import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useLocation } from 'react-router-dom'
import { LoaderCircle } from 'lucide-react'

interface RouteTransitionProps {
  children: ReactNode
}

function RouteTransition({
  children,
}: RouteTransitionProps) {
  const location = useLocation()

  const previousPath = useRef(location.pathname)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (previousPath.current === location.pathname) {
      return
    }

    previousPath.current = location.pathname

    setIsLoading(true)

    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 350)

    return () => {
      window.clearTimeout(timer)
    }
  }, [location.pathname])

  return (
    <>
      <div
        className={`route-loader ${
          isLoading ? 'route-loader-visible' : ''
        }`}
        aria-hidden={!isLoading}
      >
        <div className="route-loader-content">
          <div className="route-loader-icon">
            <LoaderCircle
              size={28}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </div>

          <div className="route-loader-line">
            <span />
          </div>
        </div>
      </div>

      <div
        className={`route-page ${
          isLoading ? 'route-page-loading' : ''
        }`}
      >
        {children}
      </div>
    </>
  )
}

export default RouteTransition