import { useReapitConnect } from '@reapit/connect-session'
import React, { FC, ReactElement, useEffect } from 'react'
import { DEFAULT_OFFICE_ID } from '../../../../../constants/settings'
import { reapitConnectBrowserSession } from '../../../../../core/connect-session'
import useGetPagedPropertiesByOfficeId from '../../../../../platform-api/dashboard-page/getPagedPropertiesByOfficeId'

import type { ChartPropertiesProps, PropertiesSubMenuListType } from './index-interfaces'
import LocationChartProperties from './LocationChartProperties'
import SellChartProperties from './SellChartProperties'
import StatusChartProperties from './StatusChartProperties'
import ToLetChartProperties from './ToLetChartProperties'
import TypeChartProperties from './TypeChartProperties'

const ChartProperties: FC<ChartPropertiesProps> = (props): ReactElement => {
  const { tabActive, tabMenuOfCategory } = props

  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)

  useEffect(() => {
    if (!connectSession) return
  }, [connectSession])

  // eslint-disable-next-line
  const { data, hasNextPage, fetchNextPage } = useGetPagedPropertiesByOfficeId(connectSession!, DEFAULT_OFFICE_ID)

  if (hasNextPage) {
    fetchNextPage()
  }
  console.log(data?.pages)
  /**
   * @todo infinite query
   */
  // query properties here
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
