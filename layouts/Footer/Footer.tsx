import React, { useEffect, useState } from 'react'
import { IFooter } from './Footer.props'
import styles from './Footer.module.scss'
import cn from 'classnames'

const Footer = ({ ...props }: IFooter): JSX.Element => {
  return <div {...props}>Footer</div>
}

export default Footer
