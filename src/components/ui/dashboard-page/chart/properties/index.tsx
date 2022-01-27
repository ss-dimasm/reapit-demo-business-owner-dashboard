import React, { FC, ReactElement } from 'react'

import type { ChartPropertiesProps, PropertiesSubMenuListType } from './index-interfaces'

import LocationChartProperties from './LocationChartProperties'
import SellChartProperties from './SellChartProperties'
import StatusChartProperties from './StatusChartProperties'
import ToLetChartProperties from './ToLetChartProperties'
import TypeChartProperties from './TypeChartProperties'

const ChartProperties: FC<ChartPropertiesProps> = (props): ReactElement => {
  const { tabActive, tabMenuOfCategory } = props

  switch (tabMenuOfCategory[tabActive] as PropertiesSubMenuListType) {
    case 'On Sell':
      return <SellChartProperties {...props} propertyData={null} />
    case 'On Rent':
      return <ToLetChartProperties {...props} propertyData={null} />
    case 'Status':
      return <StatusChartProperties {...props} propertyData={null} />
    case 'Type':
      return <TypeChartProperties {...props} propertyData={null} />
    case 'Location':
      return <LocationChartProperties {...props} propertyData={null} />
  }
}

export default ChartProperties
