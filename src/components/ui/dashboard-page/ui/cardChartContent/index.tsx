import React, { FC, ReactElement } from 'react'

import ChartAgents from '../../chart/agent'
import ChartApplicants from '../../chart/applicants'
import ChartProperties from '../../chart/properties'

import { ChartHeaderOption } from '../cardChartHeader/index-interfaces'
import type { CardChartContentProps } from './index-interfaces'
import type { PropertiesSubMenuListType } from '../../chart/properties/index-interfaces'
import { AgentsSubMenuListType } from '../../chart/agent/index-interfaces'
import { ApplicantsSubMenuListType } from '../../chart/applicants/index-interfaces'

const CardChartContent: FC<CardChartContentProps> = (props): ReactElement => {
  const { selectedCategory, tabActive, tabMenuOfCategory } = props

  switch (selectedCategory) {
    case ChartHeaderOption.property:
      return (
        <ChartProperties tabActive={tabActive} tabMenuOfCategory={tabMenuOfCategory as PropertiesSubMenuListType[]} />
      )
    case ChartHeaderOption.agent:
      return <ChartAgents tabActive={tabActive} tabMenuOfCategory={tabMenuOfCategory as AgentsSubMenuListType[]} />
    case ChartHeaderOption.applicant:
      return (
        <ChartApplicants tabActive={tabActive} tabMenuOfCategory={tabMenuOfCategory as ApplicantsSubMenuListType[]} />
      )
  }
}

export default CardChartContent
