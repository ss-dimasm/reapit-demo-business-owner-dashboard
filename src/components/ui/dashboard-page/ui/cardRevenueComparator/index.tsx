import React, { FC, ReactElement } from 'react'

interface CardRevenueComparatorProps {
  from: number
  to: number
}
const CardRevenueComparator: FC<CardRevenueComparatorProps> = (props): ReactElement => {
  return (
    <>
      <div>From: {props.from}</div>
      <div>To: {props.to}</div>
    </>
  )
}

export default CardRevenueComparator
