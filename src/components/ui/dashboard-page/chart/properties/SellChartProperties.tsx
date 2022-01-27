import React, { FC, ReactElement, useState } from 'react'

import ReactApexChart from 'react-apexcharts'

import { LINE_CHART_CONFIG } from '../config-chart'

import type { ChartSpecificPropertiesProps } from './index-interfaces'
import type { ApexOptions } from 'apexcharts'
import { LineSeriesType } from '../config-interfaces'

const SellChartProperties: FC<ChartSpecificPropertiesProps> = (props): ReactElement => {
  const { tabActive, tabMenuOfCategory } = props

  const [series] = useState<LineSeriesType[]>([
    {
      name: 'Property Price',
      data: [
        {
          x: '02-10-2017 GMT',
          y: 200000,
        },
        {
          x: '02-11-2017 GMT',
          y: 210000,
        },
        {
          x: '02-12-2017 GMT',
          y: 250000,
        },
        {
          x: '02-13-2017 GMT',
          y: 275000,
        },
        {
          x: '02-14-2017 GMT',
          y: 322000,
        },
        {
          x: '02-15-2017 GMT',
          y: 125000,
        },
        {
          x: '02-16-2017 GMT',
          y: 155000,
        },
        {
          x: '02-17-2017 GMT',
          y: 166000,
        },
        {
          x: '02-18-2017 GMT',
          y: 212500,
        },
        {
          x: '02-19-2017 GMT',
          y: 100000,
        },
        {
          x: '02-20-2017 GMT',
          y: 110000,
        },
        {
          x: '02-21-2017 GMT',
          y: 200000,
        },
        {
          x: '02-22-2017 GMT',
          y: 280000,
        },
      ],
    },
  ])
  const [options] = useState<ApexOptions>(LINE_CHART_CONFIG)

  return (
    <>
      <div>Chart Properties: {tabMenuOfCategory[tabActive]}</div>
      <ReactApexChart options={options} series={series} type="line" height={490} />
    </>
  )
}

export default SellChartProperties
