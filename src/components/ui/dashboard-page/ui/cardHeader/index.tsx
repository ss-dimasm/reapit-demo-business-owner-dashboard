import React, { FC, ReactElement } from 'react'

import { css } from '@linaria/core'
import { DESKTOP_BREAKPOINT, FlexContainer, MOBILE_BREAKPOINT } from '@reapit/elements'
import { useHistory } from 'react-router'

const styleTextWrapper = css`
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--color-grey-medium);
`
const styleHeader = css`
  color: var(--color-grey-dark);
  font-weight: 600;
  font-size: var(--font-size-subheading);
  @media (max-width: ${DESKTOP_BREAKPOINT}px) {
    font-size: 1.15rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 1.05rem;
  }
`

const styleAdditionalLinkText = css`
  font-weight: 600;
  font-size: var(--font-size-default);
  color: var(--color-blue-light2);
  @media (max-width: ${DESKTOP_BREAKPOINT}px) {
    font-size: 0.9rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 0.75rem;
  }
  &:hover {
    cursor: pointer;
    color: var(--color-blue-light);
  }
`

/**
 * CardHeaderProps
 */
interface CardHeaderProps {
  /**
   * Show the title of Card Header
   */
  title: string
  additionalLinkText: string
  link: string
  newTab?: boolean
}

/**
 * Custom Component for Summary Card in Dashboard
 * @returns
 */
const CardHeader: FC<CardHeaderProps> = (props): ReactElement => {
  const history = useHistory()
  return (
    <>
      <div>
        <FlexContainer isFlexJustifyBetween isFlexAlignCenter className={styleTextWrapper}>
          <h3 className={styleHeader}>{props.title}</h3>
          <h3 className={styleAdditionalLinkText} onClick={() => history.push(`/${props.link}`)}>
            {props.additionalLinkText} &gt;
          </h3>
        </FlexContainer>
      </div>
    </>
  )
}

export default CardHeader
