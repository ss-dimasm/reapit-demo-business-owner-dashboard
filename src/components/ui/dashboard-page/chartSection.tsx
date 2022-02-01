import React, { FC, ReactElement, useContext, useState } from 'react'

import { CardWrap, elP0, elWFull } from '@reapit/elements'
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

// set up list of menu that will appear in UI
const PROPERTIES_TAB_MENU: PropertiesSubMenuListType[] = ['On Sell', 'On Rent', 'Status', 'Type', 'Location']
const AGENTS_TAB_MENU: AgentsSubMenuListType[] = ['Agent1', 'Agent 2']
const APPLICANTS_TAB_MENU: ApplicantsSubMenuListType[] = ['Applicant 1', 'Applicant 2']

const ChartSection: FC<{}> = (): ReactElement => {
  // get data from useContext
  const centralData = useContext<DataContextParams | null>(DataContext!)
  const { isFetching } = centralData?.propertiesProperty as DataContextParams['propertiesProperty']

  // user indicator when data is not ready yet
  if (isFetching) return <CardLoading height={675} />

  // logic start here
  const [selectedCategory, setSelectedCategory] = useState<ChartHeaderOption>(ChartHeaderOption.property)
  const [tabMenuOfCategory, setTabMenuOfCategory] = useState<SubMenuListType>(PROPERTIES_TAB_MENU)
  const [activeTabMenu, setActiveTabMenu] = useState<number>(0)

  // changing type of summary
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

  // set up tab active menu
  const changeTheTabActiveMenu = (number: number): void => setActiveTabMenu(number)

  // return to view
  return (
    <CardWrap className={`${elP0} ${elWFull}`} style={{ minHeight: 675 }}>
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
