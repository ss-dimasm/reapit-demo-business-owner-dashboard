import { PropertyModel } from '@reapit/foundations-ts-definitions'
import React, { FC, ReactElement, useContext } from 'react'
import { propertiesFilterMarketingMode, regroupArray, removeDuplicateArray } from '../../../../../utils/navigation'
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

  // regroup data
  const regroupArrData: PropertyModel[] = regroupArray<PropertyModel>(data as PropertyModel[][])
  // remove duplicate data
  const removeDuplicatedData: PropertyModel[] = removeDuplicateArray<PropertyModel>(regroupArrData as PropertyModel[])

  // on sell properties
  const toSellProperties: PropertyModel[] = propertiesFilterMarketingMode(removeDuplicatedData, 'selling')

  const { tabActive, tabMenuOfCategory } = props

  switch (tabMenuOfCategory[tabActive] as PropertiesSubMenuListType) {
    case 'On Sell':
      return <SellChartProperties {...props} propertyData={toSellProperties} />
    case 'On Rent':
      return <ToLetChartProperties {...props} propertyData={removeDuplicatedData} />
    case 'Status':
      return <StatusChartProperties {...props} propertyData={removeDuplicatedData} />
    case 'Type':
      return <TypeChartProperties {...props} propertyData={removeDuplicatedData} />
    case 'Location':
      return <LocationChartProperties {...props} propertyData={removeDuplicatedData} />
  }
}

export default ChartProperties
