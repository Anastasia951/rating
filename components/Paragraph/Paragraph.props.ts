import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode
  size: 'small' | 'medium' | 'large'
}
