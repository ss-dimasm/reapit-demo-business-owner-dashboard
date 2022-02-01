import React, { FC, ReactElement } from 'react'
import { CardWrap, elP0 } from '@reapit/elements'
import { css } from '@linaria/core'

interface CardLoadingProps {
  height?: number
}

const CardLoading: FC<CardLoadingProps> = (props): ReactElement => {
  const loadingWrapper = css`
    width: 100%;
    height: 250px;
    background-color: var(--color-grey-light);
    background-image: linear-gradient(90deg, var(--color-grey-light) 50%, var(--color-grey-medium) 100%);
    background-repeat: repeat-y;
    background-size: 100% 100%;
    background-position: -400px 0;
    animation: shine 1s infinite;
    cursor: progress;

    @keyframes shine {
      to {
        background-position: 0 0;
      }
    }
  `

  // logic here
  return (
    <>
      <CardWrap className={elP0 + ' ' + loadingWrapper} style={{ height: props.height }}></CardWrap>
    </>
  )
}

export default CardLoading
