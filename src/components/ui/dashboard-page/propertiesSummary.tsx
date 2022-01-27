import React, { FC, ReactElement, useContext } from 'react'

import { CardWrap } from '@reapit/elements'

import CardHeader from './ui/cardHeader'
import CardIcon from './ui/cardIcon'
import CardSummaryWrapper from './ui/cardSummaryWrapper'
import CardSummaryContent from './ui/cardSummaryContent'

import CardLoading from './ui/cardLoading'
import { DataContext, DataContextParams } from '../../pages/dashboard-page'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import {
  propertiesFilterMarketingMode,
  propertiesFilterRentStatus,
  propertiesFilterSellStatus,
  regroupArray,
  removeDuplicateArray,
} from '../../../utils/navigation'

const PropertiesSummary: FC<{}> = (): ReactElement => {
  const centralData = useContext<DataContextParams | null>(DataContext!)
  const { totalData, isFetching, data } = centralData?.propertiesProperty as DataContextParams['propertiesProperty']

  if (isFetching) return <CardLoading />

  // regroup data
  const regroupArrData: PropertyModel[] = regroupArray<PropertyModel>(data as PropertyModel[][])
  // remove duplicate data
  const removeDuplicatedData: PropertyModel[] = removeDuplicateArray<PropertyModel>(regroupArrData as PropertyModel[])
  // on sell properties
  const toSellProperties: PropertyModel[] = propertiesFilterMarketingMode(removeDuplicatedData, 'selling')
  // on rent properties
  const toRentProperties: PropertyModel[] = propertiesFilterMarketingMode(removeDuplicatedData, 'letting')
  // on sell/rent properties
  const toSellAndRentProperties: PropertyModel[] = propertiesFilterMarketingMode(
    removeDuplicatedData,
    'sellingAndLetting',
  )
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
        <CardHeader title="Property" additionalLinkText="See all properties" link="summary/properties" />
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
