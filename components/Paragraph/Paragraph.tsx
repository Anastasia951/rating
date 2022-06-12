import React from 'react'
import { IParagraphProps } from './Paragraph.props'
import styles from './Paragraph.module.scss'
import cn from 'classnames'

const Paragraph = ({
  children,
  size,
  ...props
}: IParagraphProps): JSX.Element => {
  return (
    <p
      className={cn([
        styles.p,
        {
          [styles.small]: size === 'small',
          [styles.medium]: size === 'medium',
          [styles.large]: size === 'large',
        },
      ])}
      {...props}>
      {children}
    </p>
  )
}

export default Paragraph
