import React from 'react'
import { IButtonProps } from './Button.props'
import styles from './Button.module.scss'
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

const Button = ({ appearance, children, arrowPos, ...props }: IButtonProps) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance == 'primary',
        [styles.transparent]: appearance == 'transparent',
      })}
      {...props}>
      {children}
      {arrowPos !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrowPos === 'down',
            [styles.right]: arrowPos === 'right',
          })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  )
}

export default Button
