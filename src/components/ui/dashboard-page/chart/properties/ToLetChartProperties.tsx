import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { ApexOptions } from 'apexcharts'
import React, { FC, ReactElement, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { filterPropertiesBasedCreatedData } from '../../../../../utils/navigation'
import { COLUMN_CHART_CONFIG } from '../config-chart'
import { LineSeriesType } from '../config-interfaces'
import { ChartSpecificPropertiesProps } from './index-interfaces'

const ToLetChartProperties: FC<ChartSpecificPropertiesProps> = (props): ReactElement => {
  const { propertyData } = props

  const propertiesOnRentData = filterPropertiesBasedCreatedData<PropertyModel>(propertyData, 'Properties On Rent')
  /**
   * @todo - Filter Properties Sell Based Month
   *
   */
  const [series] = useState<LineSeriesType[]>(propertiesOnRentData)
  const [options] = useState<ApexOptions>(COLUMN_CHART_CONFIG)

  return (
    <>
      <ReactApexChart options={options} series={series} type="bar" height={500} />
    </>
  )
}

export default ToLetChartProperties
