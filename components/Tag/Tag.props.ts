import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode
  size?: 'medium' | 'large'
  color?: 'transparent' | 'red' | 'gray' | 'green' | 'primary'
  href?: string
}
