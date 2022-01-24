import React, { FC, ReactElement } from 'react'
import { CardChartTabsProps } from './index-interfaces'

const CardChartTabs: FC<CardChartTabsProps> = (props): ReactElement => {
  const { subMenuList } = props
  return <div>{subMenuList}</div>
}

export default CardChartTabs
