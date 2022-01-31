import React, { ReactElement } from 'react'
import { css } from '@linaria/core'
import { CardWrap, elMt6, elP0 } from '@reapit/elements'

const CardLoading = (): ReactElement => {
  const loadingWrapper = css`
    width: 100%;
    height: 150px;
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

  return (
    <>
      <CardWrap className={elP0 + ' ' + loadingWrapper + ' ' + elMt6} style={{ height: 150 }}></CardWrap>
    </>
  )
}

export default CardLoading
