import React, { FC, ReactElement } from 'react'
import { css } from '@linaria/core'

const wrapperStyle = css`
  padding: 1rem 0.75rem;
  border-bottom: 1px solid var(--color-grey-medium);
`

interface CardListContentEmployeeProps {
  type: 'birthday' | 'anniversary'
}

const CardListContentEmployee: FC<CardListContentEmployeeProps> = (props): ReactElement => {
  switch (props.type) {
    case 'birthday':
      return <div className={wrapperStyle}>Today is John Doe&apos;s birthday</div>
    case 'anniversary':
      return <div className={wrapperStyle}>Today is John Doe&apos;s 21st anniversary </div>
  }
}

export default CardListContentEmployee
