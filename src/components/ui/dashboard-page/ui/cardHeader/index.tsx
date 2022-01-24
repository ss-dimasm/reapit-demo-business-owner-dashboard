import React, { FC, ReactElement } from 'react'

import { css } from '@linaria/core'
import { FlexContainer } from '@reapit/elements'

const styleTextWrapper = css`
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--color-grey-medium);
`
const styleHeader = css`
  color: var(--color-grey-dark);
  font-weight: 600;
  font-size: var(--font-size-subheading);
`

const styleAdditionalLinkText = css`
  font-weight: 600;
  font-size: var(--font-size-default);
  color: var(--color-blue-light2);
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
  return (
    <>
      <div>
        <FlexContainer isFlexJustifyBetween isFlexAlignCenter className={styleTextWrapper}>
          <h3 className={styleHeader}>{props.title}</h3>
          <h3 className={styleAdditionalLinkText}>{props.additionalLinkText} &gt;</h3>
        </FlexContainer>
      </div>
    </>
  )
}

export default CardHeader
