import React, { useEffect, useState } from 'react'
import { ILayoutProps } from './Layout.props'
import styles from './Layout.module.scss'
import Star from './star.svg'

import cn from 'classnames'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: React.FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
