import React, { FC, ReactElement } from 'react'
import { elMl3, elMl4, FlexContainer, useMediaQuery } from '@reapit/elements'

import { MdOutlineApartment, MdSupervisorAccount, MdOutlinePeopleOutline } from 'react-icons/md'
import { RiMoneyPoundBoxLine } from 'react-icons/ri'
import { CardIconProps, IconProps } from './index-interface'
import { alternativeTextStyle, totalItemsStyle } from './index-style'

/**
 * Icon ReactElement
 * @param param0
 * @returns
 */
const Icon: FC<IconProps> = ({ iconType }): ReactElement => {
  const { isWideScreen, isSuperWideScreen, is4KScreen, isMobile } = useMediaQuery()
  const DEFAULT_SIZE = isWideScreen || isSuperWideScreen || is4KScreen ? '4rem' : isMobile ? '2.5rem' : '3rem'
  const DEFAULT_COLOR = 'var(--color-blue-dark)'
  switch (iconType) {
    case 'apartment':
      return <MdOutlineApartment size={DEFAULT_SIZE} color={DEFAULT_COLOR} />
    case 'agent':
      return <MdSupervisorAccount size={DEFAULT_SIZE} color={DEFAULT_COLOR} />
    case 'applicant':
      return <MdOutlinePeopleOutline size={DEFAULT_SIZE} color={DEFAULT_COLOR} />
    case 'revenue':
      return <RiMoneyPoundBoxLine size={DEFAULT_SIZE} color={DEFAULT_COLOR} />
  }
}

const CardIcon: FC<CardIconProps> = (props): ReactElement => {
  return (
    <>
      <FlexContainer
        className={`${elMl4} ${props.className ?? ''} ${props.isCenter ? 'el-flex-justify-center' : ''}`}
        isFlexAlignCenter
      >
        <div>
          <Icon iconType={props.iconType} />
        </div>
        <FlexContainer isFlexColumn className={elMl3}>
          <h3 className={totalItemsStyle}>{props.totalItems}</h3>
          <h4 className={alternativeTextStyle}>{props.alternativeText}</h4>
        </FlexContainer>
      </FlexContainer>
    </>
  )
}

export default CardIcon
