import React, { FC, ReactElement } from 'react'
import { ChartSpecificPropertiesProps } from './index-interfaces'

const LocationChartProperties: FC<ChartSpecificPropertiesProps> = (props): ReactElement => {
  const { tabActive, tabMenuOfCategory, propertyData } = props

  console.log(propertyData)
  return <div>Chart Properties: {tabMenuOfCategory[tabActive]}</div>
}

export default LocationChartProperties
