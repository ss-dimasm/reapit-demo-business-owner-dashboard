import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'

import { CardWrap } from '@reapit/elements'
import CardChartHeader from './ui/cardChartHeader'
import { ChartHeaderOption } from './ui/cardChartHeader/index-interfaces'
import CardChartTabs from './ui/cardChartTabs'
import CardChartContent from './ui/cardChartContent'

const changeSelectOption =
  (setSelectedCategory: Dispatch<SetStateAction<ChartHeaderOption>>) => (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedCategory(event.target.value as ChartHeaderOption)

const ChartSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<ChartHeaderOption>(ChartHeaderOption.property)
  // eslint-disable-next-line
  const [subMenuOfCategory, setSubMenuOfCategory] = useState<string[]>()

  // atm, its hard coded
  let data: string[]
  switch (selectedCategory) {
    case ChartHeaderOption.property:
      data = ['To Sell', 'To Let']
      break
    case ChartHeaderOption.agent:
      data = ['Agent1', 'Agent 2']
      break
    case ChartHeaderOption.applicant:
      data = ['Applicant 1', 'Applicant 2']
  }

  useEffect(() => {
    setSubMenuOfCategory(data)
  }, [selectedCategory])

  return (
    <CardWrap className="el-p0">
      <CardChartHeader
        changeCategory={changeSelectOption}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CardChartTabs subMenuList={subMenuOfCategory!} />
      <CardChartContent />
    </CardWrap>
  )
}

export default ChartSection
