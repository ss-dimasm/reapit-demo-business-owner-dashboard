import React, { FC, ReactElement, useState } from 'react'

import ReactApexChart from 'react-apexcharts'

import { LINE_CHART_CONFIG } from '../config-chart'

import type { ChartSpecificPropertiesProps } from './index-interfaces'
import type { ApexOptions } from 'apexcharts'
import { LineSeriesType } from '../config-interfaces'
import { filterPropertiesBasedCreatedData } from '../../../../../utils/navigation'
import { PropertyModel } from '@reapit/foundations-ts-definitions'

const SellChartProperties: FC<ChartSpecificPropertiesProps> = (props): ReactElement => {
  const { tabActive, tabMenuOfCategory, propertyData } = props

  const test = filterPropertiesBasedCreatedData<PropertyModel>(propertyData, 'test')
  console.log(test)
  /**
   * @todo - Filter Properties Sell Based Month
   *
   */
  const [series] = useState<LineSeriesType[]>(test)
  const [options] = useState<ApexOptions>(LINE_CHART_CONFIG)

  return (
    <>
      <div>Chart Properties: {tabMenuOfCategory[tabActive]}</div>
      <ReactApexChart options={options} series={series} type="line" height={490} />
    </>
  )
}

export default SellChartProperties
