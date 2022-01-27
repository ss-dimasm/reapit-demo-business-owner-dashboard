import React, { FC, ReactElement, useContext } from 'react'

import { CardWrap } from '@reapit/elements'

import CardHeader from './ui/cardHeader'
import CardIcon from './ui/cardIcon'
import CardSummaryWrapper from './ui/cardSummaryWrapper'
import CardSummaryContent from './ui/cardSummaryContent'

import CardLoading from './ui/cardLoading'
import { DataContext, DataContextParams } from '../../pages/dashboard-page'

const PropertiesSummary: FC<{}> = (): ReactElement => {
  const centralData = useContext<DataContextParams | null>(DataContext!)
  if (centralData!.propertiesProperty.isFetching) return <CardLoading />

  return (
    <>
      <CardWrap className="el-p0">
        <CardHeader title="Property" additionalLinkText="See all properties" link="summary/properties" />
        <CardIcon iconType="apartment" totalItems={320} alternativeText="Properties" />
        <CardSummaryWrapper>
          <CardSummaryContent totalCount={243} alternativeText="Occupied" />
          <CardSummaryContent totalCount={33} alternativeText="Unlisted" isCenterPosition />
          <CardSummaryContent totalCount={44} alternativeText="Renovate" />
        </CardSummaryWrapper>
      </CardWrap>
    </>
  )
}

export default PropertiesSummary
