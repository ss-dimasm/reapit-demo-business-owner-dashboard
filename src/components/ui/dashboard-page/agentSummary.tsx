import React, { FC, ReactElement, useContext } from 'react'
import { CardWrap } from '@reapit/elements'

import { DataContext, DataContextParams } from '../../pages/dashboard-page'
import CardHeader from './ui/cardHeader'
import CardIcon from './ui/cardIcon'
import CardLoading from './ui/cardLoading'
import CardSummaryContent from './ui/cardSummaryContent'
import CardSummaryWrapper from './ui/cardSummaryWrapper'
import { NegotiatorModel, NegotiatorModelPagedResult } from '@reapit/foundations-ts-definitions'
import { regroupArray } from '../../../utils/navigation'
import { InfiniteData } from 'react-query'

// import { regroupArray } from '../../../utils/navigation'
// import { NegotiatorModel } from '@reapit/foundations-ts-definitions'

const AgentSummary: FC<{}> = (): ReactElement => {
  const centralData = useContext<DataContextParams | null>(DataContext!)
  const { totalData, isFetching, data } = centralData?.agentsProperty as DataContextParams['agentsProperty']

  if (isFetching || !data) return <CardLoading />
  // regroup data
  const regroupArr = regroupArray<
    InfiniteData<NegotiatorModelPagedResult>,
    NegotiatorModelPagedResult,
    NegotiatorModel
  >(data!)

  // get Agent active
  const activeAgent: NegotiatorModel[] = regroupArr.filter((a) => a.active === true)
  // get Agent unActive
  const nonActiveAgent: NegotiatorModel[] = regroupArr.filter((a) => a.active === false)
  // get Agent new (in 1 month)
  const newAgent: NegotiatorModel[] = regroupArr.filter(
    (a) => new Date(a.created as string) > new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000),
  )

  return (
    <>
      <CardWrap className="el-p0">
        <CardHeader title="Agent" additionalLinkText="See all agents" link="summary/agents" />
        <CardIcon iconType="agent" totalItems={totalData} alternativeText="Agents" />
        <CardSummaryWrapper>
          <CardSummaryContent totalCount={activeAgent.length} alternativeText="Active" />
          <CardSummaryContent totalCount={nonActiveAgent.length} alternativeText="Unactive" isCenterPosition />
          <CardSummaryContent totalCount={newAgent.length} alternativeText="New" />
        </CardSummaryWrapper>
      </CardWrap>
    </>
  )
}

export default AgentSummary
