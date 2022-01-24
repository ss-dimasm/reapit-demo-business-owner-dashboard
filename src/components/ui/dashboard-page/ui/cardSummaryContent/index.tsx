import React, { FC, ReactElement } from 'react'

import { FlexContainer } from '@reapit/elements'
import { totalCountStyle, wrapper, wrapperCenter } from './index-style'
import { alternativeTextStyle } from '../cardIcon/index-style'

interface CardSummaryContentProps {
  totalCount: number
  alternativeText: string
  isCenterPosition?: boolean
}

const CardSummaryContent: FC<CardSummaryContentProps> = (props): ReactElement => {
  return (
    <FlexContainer
      isFlexColumn
      isFlexAlignCenter
      className={props.isCenterPosition ? `${wrapperCenter + ' ' + wrapper}` : wrapper}
    >
      <div>
        <h3 className={totalCountStyle}>{props.totalCount}</h3>
      </div>
      <div>
        <h4 className={alternativeTextStyle}>{props.alternativeText}</h4>
      </div>
    </FlexContainer>
  )
}

export default CardSummaryContent
