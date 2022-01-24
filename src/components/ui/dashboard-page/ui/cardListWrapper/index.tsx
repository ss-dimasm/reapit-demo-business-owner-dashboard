import React, { FC, HTMLAttributes, ReactElement, ReactNode } from 'react'

interface CardListWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}
const CardListWrapper: FC<CardListWrapperProps> = (props): ReactElement => {
  return <div>{props.children}</div>
}

export default CardListWrapper
