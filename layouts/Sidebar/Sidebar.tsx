import React, { useEffect, useState } from 'react'
import { ISidebar } from './Sidebar.props'
import styles from './Sidebar.module.scss'
import cn from 'classnames'

const Sidebar = ({ ...props }: ISidebar): JSX.Element => {
  return <div {...props}>Sidebar</div>
}

export default Sidebar
