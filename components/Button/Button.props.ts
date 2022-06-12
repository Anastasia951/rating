import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
  appearance: 'primary' | 'transparent'
  arrowPos?: 'right' | 'down' | 'none'
}
