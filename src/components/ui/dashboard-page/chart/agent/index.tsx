import React, { FC, ReactElement } from 'react'
import { AgentsSubMenuListType } from './index-interfaces'

interface ChartAgentsProps {
  tabActive: number
  tabMenuOfCategory: AgentsSubMenuListType[]
}
const ChartAgents: FC<ChartAgentsProps> = ({ tabActive, tabMenuOfCategory }): ReactElement => {
  const currentTab = tabMenuOfCategory[tabActive]
  // query Agents here
  return <div>Chart Agents - {currentTab}</div>
}

export default ChartAgents
