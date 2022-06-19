import React, { useEffect, useState } from 'react'
import { IFooter } from './Footer.props'
import styles from './Footer.module.scss'
import cn from 'classnames'

const Footer = ({ ...props }: IFooter): JSX.Element => {
  return (
    <div {...props}>
      <div className={styles.copy}>OwlTop © 2020 - 2021 Все права защищены</div>
      <ul className={styles.docs}>
        <li>
          <a href=''>Пользовательское соглашение</a>
        </li>
        <li>
          <a href=''>Политика конфиденциальности</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
