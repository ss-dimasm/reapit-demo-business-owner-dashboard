import React, { FC, ReactElement, useState } from 'react'

import ReactApexChart from 'react-apexcharts'

import { COLUMN_CHART_CONFIG } from '../config-chart'

import type { ChartSpecificPropertiesProps } from './index-interfaces'
import type { ApexOptions } from 'apexcharts'
import { LineSeriesType } from '../config-interfaces'
import { filterPropertiesBasedCreatedData } from '../../../../../utils/navigation'
import { PropertyModel } from '@reapit/foundations-ts-definitions'

const SellChartProperties: FC<ChartSpecificPropertiesProps> = (props): ReactElement => {
  const { propertyData } = props

  const propertiesOnSaleData = filterPropertiesBasedCreatedData<PropertyModel>(propertyData, 'Properties On Sale')
  /**
   * @todo - Filter Properties Sell Based Month
   *
   */
  const [series] = useState<LineSeriesType[]>(propertiesOnSaleData)
  const [options] = useState<ApexOptions>(COLUMN_CHART_CONFIG)

  return (
    <>
      <ReactApexChart options={options} series={series} type="bar" height={500} />
    </>
  )
}

export default SellChartProperties
