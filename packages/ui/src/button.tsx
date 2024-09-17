'use client'

import { ReactNode } from 'react'
import { Size } from './size'
import { Variant } from './variant'

interface ButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  size?: Size
  variant?: Variant
}

export const Button = ({
  children,
  className,
  href,
  onClick,
  size = Size.MEDIUM,
  variant = Variant.PRIMARY,
}: ButtonProps) => {
  let sizeCssClasses = ''
  switch (size) {
    case Size.SMALL:
      sizeCssClasses = 'px-4 py-1.5 rounded shadow'
      break
    case Size.MEDIUM:
      sizeCssClasses = 'px-6 py-2 rounded-md shadow-md'
      break
    case Size.LARGE:
      sizeCssClasses = 'px-8 py-2.5 rounded-lg shadow-lg'
      break
  }
  let variantCssClasses = ''
  switch (variant) {
    case Variant.PRIMARY:
      variantCssClasses = 'bg-rose-600 outline-rose-600 hover:bg-rose-700 active:bg-rose-800'
      break
    case Variant.SECONDARY:
      variantCssClasses = 'bg-fuchsia-600 outline-fuchsia-600 hover:bg-fuchsia-700 active:bg-fuchsia-800'
      break
    case Variant.TERTIARY:
      variantCssClasses = 'bg-amber-600 outline-amber-600 hover:bg-amber-700 active:bg-amber-800'
      break
  }
  const commonCssClasses =
    'flex items-center justify-center text-white focus:outline outline-offset-2 transition-colors'

  const completedCssClasses = `${sizeCssClasses} ${variantCssClasses} ${commonCssClasses} ${className}`
  return href ? (
    <a href={href} className={completedCssClasses}>
      {children}
    </a>
  ) : (
    <button className={completedCssClasses} onClick={onClick}>
      {children}
    </button>
  )
}
