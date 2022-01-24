import { CardWrap } from '@reapit/elements'
import React, { FC, ReactElement } from 'react'
import CardHeader from './ui/cardHeader'
import CardIcon from './ui/cardIcon'
import CardSummaryContent from './ui/cardSummaryContent'
import CardSummaryWrapper from './ui/cardSummaryWrapper'

const AgentSummary: FC<{}> = (): ReactElement => {
  /**
   * @todo integrate with Reapit Resources (using React Query based OfficeId['MKT'])
   */
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
