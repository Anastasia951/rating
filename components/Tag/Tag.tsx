import React from 'react'
import { ITagProps } from './Tag.props'
import styles from './Tag.module.scss'
import cn from 'classnames'

const Tag = ({
  size = 'medium',
  children,
  color = 'primary',
  className,
  href,
  ...props
}: ITagProps): JSX.Element => {
  return (
    <div
      className={cn([
        styles.tag,
        {
          [styles.medium]: size === 'medium',
          [styles.large]: size === 'large',
          [styles.transparent]: color === 'transparent',
          [styles.red]: color === 'red',
          [styles.gray]: color === 'gray',
          [styles.green]: color === 'green',
          [styles.primary]: color === 'primary',
        },
      ])}
      {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  )
}

export default Tag
