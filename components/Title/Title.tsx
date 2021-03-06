import React from 'react'
import { ITitleProps } from './Titile.props'
import styles from './Title.module.scss'

const Title = ({ tag, children, ...props }: ITitleProps): JSX.Element => {
  switch (tag) {
    case 'h1': {
      return (
        <h1 className={styles.h1} {...props}>
          {children}
        </h1>
      )
    }
    case 'h2': {
      return (
        <h2 className={styles.h2} {...props}>
          {children}
        </h2>
      )
    }
    case 'h3': {
      return (
        <h3 className={styles.h3} {...props}>
          {children}
        </h3>
      )
    }
    default: {
      return <>{children}</>
    }
  }
}

export default Title
