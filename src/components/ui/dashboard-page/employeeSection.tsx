import React, { FC, ReactElement, useContext } from 'react'

import { CardWrap, SmallText } from '@reapit/elements'

import CardHeader from './ui/cardHeader'
import CardListWrapper from './ui/cardListWrapper'
import CardListContent from './ui/cardListContentEmployee'
import { DataContext, DataContextParams } from '../../pages/dashboard-page'
import CardLoading from './ui/cardLoading'

const EmployeeSection: FC<{}> = (): ReactElement => {
  const centralData = useContext<DataContextParams | null>(DataContext!)
  if (centralData!.contactProperty.isFetching) return <CardLoading height={325} />
  // logic here
  return (
    <CardWrap className="el-p0">
      <CardHeader title="News" additionalLinkText="More details" link="news" />
      <CardListWrapper>
        <CardListContent type="birthday" />
        <CardListContent type="birthday" />
        <CardListContent type="anniversary" />
        <SmallText hasCenteredText className="el-mt8">
          load more button will appear in here
        </SmallText>
      </CardListWrapper>
    </CardWrap>
  )
}

export default EmployeeSection
