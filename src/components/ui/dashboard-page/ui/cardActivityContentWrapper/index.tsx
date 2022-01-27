import React, { FC, ReactElement, ReactNode } from 'react'
import { wrapper } from './index-style'

interface CardActivityContentWrapper {
  children: ReactNode
}
const CardActivityContentWrapper: FC<{}> = ({ children }): ReactElement => {
  return <div className={wrapper}>{children}</div>
}

export default CardActivityContentWrapper
