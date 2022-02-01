/* eslint-disable max-len */
import React, { FC, ReactElement, useContext } from 'react'

import { CardWrap } from '@reapit/elements'

import CardHeader from './ui/cardHeader'
import CardIcon from './ui/cardIcon'
import CardSummaryWrapper from './ui/cardSummaryWrapper'
import CardSummaryContent from './ui/cardSummaryContent'

import CardLoading from './ui/cardLoading'
import { DataContext, DataContextParams } from '../../pages/dashboard-page'
import {
  propertiesFilterMarketingMode,
  propertiesFilterRentStatus,
  propertiesFilterSellStatus,
  regroupArray,
} from '../../../utils/navigation'
import { PropertyModel, PropertyModelPagedResult } from '@reapit/foundations-ts-definitions'
import { InfiniteData } from 'react-query'

const PropertiesSummary: FC<{}> = (): ReactElement => {
  const centralData = useContext<DataContextParams | null>(DataContext!)
  const { totalData, isFetching, data } = centralData?.propertiesProperty as DataContextParams['propertiesProperty']

  if (isFetching) return <CardLoading />

  // // regroup data
  const regroupArr = regroupArray<InfiniteData<PropertyModelPagedResult>, PropertyModelPagedResult, PropertyModel>(
    data!,
  )

  // on sell properties
  const toSellProperties: PropertyModel[] = propertiesFilterMarketingMode(regroupArr, 'selling')
  // on rent properties
  const toRentProperties: PropertyModel[] = propertiesFilterMarketingMode(regroupArr, 'letting')
  // on sell/rent properties
  const toSellAndRentProperties: PropertyModel[] = propertiesFilterMarketingMode(regroupArr, 'sellingAndLetting')
  const toSellPropertiesQuantity = propertiesFilterSellStatus(toSellProperties)
  const toRentPropertiesQuantity = propertiesFilterRentStatus(toRentProperties)
  const toSellAndRentPropertiesQuantity = propertiesFilterRentStatus(toSellAndRentProperties)

  // filter sell status, then regroup again
  const availablePropertiesQuantity =
    toSellPropertiesQuantity.available + toRentPropertiesQuantity.available + toSellAndRentPropertiesQuantity.available

  const occupiedPropertiesQuantity =
    toSellPropertiesQuantity.occupied + toRentPropertiesQuantity.occupied + toSellAndRentPropertiesQuantity.occupied

  const unlistedPropertiesQuantity =
    toSellPropertiesQuantity.unlisted + toRentPropertiesQuantity.unlisted + toSellAndRentPropertiesQuantity.unlisted
  // logic to find occupied, unlisted, renovated
  return (
    <>
      <CardWrap className="el-p0">
        <CardHeader title="Property" additionalLinkText="See all properties" link="properties" />
        <CardIcon iconType="apartment" totalItems={totalData} alternativeText="Properties" />
        <CardSummaryWrapper>
          <CardSummaryContent totalCount={occupiedPropertiesQuantity} alternativeText="Occupied" />
          <CardSummaryContent totalCount={unlistedPropertiesQuantity} alternativeText="Unlisted" isCenterPosition />
          <CardSummaryContent totalCount={availablePropertiesQuantity} alternativeText="Available" />
        </CardSummaryWrapper>
      </CardWrap>
    </>
  )
}

export default PropertiesSummary
