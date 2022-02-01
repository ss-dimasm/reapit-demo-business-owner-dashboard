import React, { FC, ReactElement, useState } from 'react'
import { FlexContainer, Subtitle } from '@reapit/elements'
import { PropertyModel } from '@reapit/foundations-ts-definitions'

import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

import { propertiesFilterMarketingMode } from '../../../../../utils/navigation'
import { DONUT_PIE_CHART_CONFIG } from '../config-chart'
import { ChartSpecificPropertiesProps } from './index-interfaces'

const StatusChartProperties: FC<ChartSpecificPropertiesProps> = (props): ReactElement => {
  const { propertyData } = props

  // on sell properties
  const toSellProperties: PropertyModel[] = propertiesFilterMarketingMode(propertyData, 'selling')
  // on rent properties
  const toRentProperties: PropertyModel[] = propertiesFilterMarketingMode(propertyData, 'letting')

  console.log(toSellProperties, toRentProperties)

  // generate series, and option

  const [onSaleSeries] = useState<number[]>([44, 55, 41, 17, 15])
  const [options] = useState<ApexOptions>(DONUT_PIE_CHART_CONFIG)

  return (
    <FlexContainer isFlexJustifyBetween>
      <FlexContainer isFlexColumn>
        <Subtitle hasNoMargin>On Sell</Subtitle>
        <ReactApexChart options={options} series={onSaleSeries} type="donut" height={700} width={'100%'} />
      </FlexContainer>
      <FlexContainer isFlexColumn>
        <Subtitle hasNoMargin>On Rent</Subtitle>
        <ReactApexChart options={options} series={onSaleSeries} type="donut" height={700} width={'100%'} />
      </FlexContainer>
    </FlexContainer>
  )
}

export default StatusChartProperties
