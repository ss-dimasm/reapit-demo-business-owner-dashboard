import { CardWrap } from '@reapit/elements'
import React, { FC, ReactElement, useContext } from 'react'
import { DataContext, DataContextParams } from '../../pages/dashboard-page'
import CardHeader from './ui/cardHeader'
import CardIcon from './ui/cardIcon'
import CardLoading from './ui/cardLoading'
import CardSummaryContent from './ui/cardSummaryContent'
import CardSummaryWrapper from './ui/cardSummaryWrapper'

const AgentSummary: FC<{}> = (): ReactElement => {
  const centralData = useContext<DataContextParams | null>(DataContext!)
  if (centralData!.agentsProperty.isFetching) return <CardLoading />

  return (
    <>
      <CardWrap className="el-p0">
        <CardHeader title="Agent" additionalLinkText="See all agents" link="summary/agents" />
        <CardIcon iconType="agent" totalItems={10} alternativeText="Agents" />
        <CardSummaryWrapper>
          <CardSummaryContent totalCount={5} alternativeText="Active" />
          <CardSummaryContent totalCount={3} alternativeText="Unactive" isCenterPosition />
          <CardSummaryContent totalCount={2} alternativeText="New" />
        </CardSummaryWrapper>
      </CardWrap>
    </>
  )
}

export default AgentSummary
