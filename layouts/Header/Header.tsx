import React, { useEffect, useState } from 'react'
import { IHeader } from './Header.props'
import styles from './Header.module.scss'
import cn from 'classnames'

const Header = ({ ...props }: IHeader): JSX.Element => {
  return <div {...props}>Header</div>
}

export default Header
