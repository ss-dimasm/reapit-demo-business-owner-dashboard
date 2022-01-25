import React, { FC, ReactElement } from 'react'
import { ApplicantsSubMenuListType } from './index-interfaces'

interface ChartApplicantsProps {
  tabActive: number
  tabMenuOfCategory: ApplicantsSubMenuListType[]
}
const ChartApplicants: FC<ChartApplicantsProps> = ({ tabActive, tabMenuOfCategory }): ReactElement => {
  const currentTab = tabMenuOfCategory[tabActive]
  // query Applicants here
  return <div>Chart Applicants - {currentTab}</div>
}

export default ChartApplicants
