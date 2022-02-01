import React, { FC, ReactElement, useContext } from 'react'

import { PropertyModel, PropertyModelPagedResult } from '@reapit/foundations-ts-definitions'
import { InfiniteData } from 'react-query'

import { propertiesFilterMarketingMode, regroupArray } from '../../../../../utils/navigation'
import { DataContext, DataContextParams } from '../../../../pages/dashboard-page'

import type { ChartPropertiesProps, PropertiesSubMenuListType } from './index-interfaces'

import LocationChartProperties from './LocationChartProperties'
import SellChartProperties from './SellChartProperties'
import StatusChartProperties from './StatusChartProperties'
import ToLetChartProperties from './ToLetChartProperties'
import TypeChartProperties from './TypeChartProperties'

const ChartProperties: FC<ChartPropertiesProps> = (props): ReactElement => {
  const centralData = useContext<DataContextParams | null>(DataContext!)

  const { data } = centralData?.propertiesProperty as DataContextParams['propertiesProperty']

  // // regroup data
  const regroupArr = regroupArray<InfiniteData<PropertyModelPagedResult>, PropertyModelPagedResult, PropertyModel>(data)

  // on sell properties
  const toSellProperties = propertiesFilterMarketingMode<PropertyModel>(regroupArr, 'selling')

  // on rent properties
  const toRentProperties = propertiesFilterMarketingMode<PropertyModel>(regroupArr, 'letting')

  const { tabActive, tabMenuOfCategory } = props

  switch (tabMenuOfCategory[tabActive] as PropertiesSubMenuListType) {
    case 'On Sell':
      return <SellChartProperties {...props} propertyData={toSellProperties} />
    case 'On Rent':
      return <ToLetChartProperties {...props} propertyData={toRentProperties} />
    case 'Status':
      return <StatusChartProperties {...props} propertyData={[]} />
    case 'Type':
      return <TypeChartProperties {...props} propertyData={[]} />
    case 'Location':
      return <LocationChartProperties {...props} propertyData={[]} />
  }
}

export default ChartProperties
