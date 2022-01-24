import React, { FC, HTMLAttributes, ReactNode } from 'react'

import { css } from '@linaria/core'
import { elMt4, elMy3, FlexContainer } from '@reapit/elements'

interface CardSummaryWrapperProps extends HTMLAttributes<HTMLElement['className']> {
  children: ReactNode
}

const cardSummaryDiv = css`
  background-color: var(--intent-secondary-light);
  border-radius: 5px;
  padding: 0.5rem 1rem;
`

const CardSummaryWrapper: FC<CardSummaryWrapperProps> = (props) => {
  return (
    <>
      <div className={`${cardSummaryDiv} ${elMt4}`}>
        <FlexContainer isFlexJustifyAround className={elMy3}>
          {props.children}
        </FlexContainer>
      </div>
    </>
  )
}

export default CardSummaryWrapper
