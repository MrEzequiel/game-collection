import React, { JSXElementConstructor, ReactElement } from 'react'
import { useRef } from 'react'
import useObserveElement from '../../hooks/useObserveElement'

interface IAnimationProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>
  style?: React.CSSProperties
  animationTimingFunction?:
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'linear'
    | 'ease'
  animationDuration?: number
  animationDelay?: number
}

/*
  This component is used to animate the content of the page.
  The animation is triggered by the scroll position of the page.

  Props:
    children: The content of the page.
    animationTimingFunction: The timing function of the animation.
    animationDuration: The delay of the animation.
    animationDelay: The delay of the animation in ms.
*/

const Animation: React.FC<IAnimationProps> = ({
  children,
  animationTimingFunction = 'ease-in',
  animationDuration = 500,
  animationDelay = 0,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const isVisible = useObserveElement(ref, {
    rootMargin: '0px 0px -75px 0px',
  })

  const injectedAnimationStyle: React.CSSProperties = {
    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
    opacity: isVisible ? 1 : 0,
    transitionProperty: 'transform, opacity',
    transitionDuration: `${animationDuration}ms`,
    transitionTimingFunction: animationTimingFunction,
    transitionDelay: isVisible ? `${animationDelay}ms` : '0ms',
  }

  return (
    <div ref={ref} style={{ ...injectedAnimationStyle, ...style }}>
      {children}
    </div>
  )
}

export default Animation
