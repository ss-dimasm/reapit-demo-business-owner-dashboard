import React, { FC, ReactElement, useContext, useState } from 'react'

import { CardWrap } from '@reapit/elements'
import CardChartHeader from './ui/cardChartHeader'
import CardChartTabs from './ui/cardChartTabs'
import CardChartContent from './ui/cardChartContent'

import { ChartHeaderOption } from './ui/cardChartHeader/index-interfaces'

import type { PropertiesSubMenuListType } from './chart/properties/index-interfaces'
import type { ApplicantsSubMenuListType } from './chart/applicants/index-interfaces'
import type { AgentsSubMenuListType } from './chart/agent/index-interfaces'
import { SubMenuListType } from './ui/cardChartContent/index-interfaces'
import { DataContext, DataContextParams } from '../../pages/dashboard-page'
import CardLoading from './ui/cardLoading'

const PROPERTIES_TAB_MENU: PropertiesSubMenuListType[] = ['On Sell', 'On Rent', 'Status', 'Type', 'Location']
const AGENTS_TAB_MENU: AgentsSubMenuListType[] = ['Agent1', 'Agent 2']
const APPLICANTS_TAB_MENU: ApplicantsSubMenuListType[] = ['Applicant 1', 'Applicant 2']

const ChartSection: FC<{}> = (): ReactElement => {
  const centralData = useContext<DataContextParams | null>(DataContext!)
  if (centralData!.propertiesProperty.isFetching) return <CardLoading height={675} />

  const [selectedCategory, setSelectedCategory] = useState<ChartHeaderOption>(ChartHeaderOption.property)
  const [tabMenuOfCategory, setTabMenuOfCategory] = useState<SubMenuListType>(PROPERTIES_TAB_MENU)
  const [activeTabMenu, setActiveTabMenu] = useState<number>(0)

  const changeTabMenuOfCategory = (selectedCategory: ChartHeaderOption): void => {
    let data: SubMenuListType
    switch (selectedCategory) {
      case ChartHeaderOption.property:
        data = PROPERTIES_TAB_MENU
        break
      case ChartHeaderOption.agent:
        data = AGENTS_TAB_MENU
        break
      case ChartHeaderOption.applicant:
        data = APPLICANTS_TAB_MENU
    }

    // set current state
    setSelectedCategory(selectedCategory)
    setTabMenuOfCategory(data)
    setActiveTabMenu(0)
  }

  const changeTheTabActiveMenu = (number: number) => {
    setActiveTabMenu(number)
  }

  return (
    <CardWrap className="el-p0">
      <CardChartHeader
        changeTabMenuOfCategory={changeTabMenuOfCategory}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CardChartTabs
        tabMenuList={tabMenuOfCategory}
        activeTabMenu={activeTabMenu}
        changeActiveTabMenu={changeTheTabActiveMenu}
      />
      <CardChartContent
        selectedCategory={selectedCategory}
        tabMenuOfCategory={tabMenuOfCategory}
        tabActive={activeTabMenu}
      />
    </CardWrap>
  )
}

export default ChartSection
