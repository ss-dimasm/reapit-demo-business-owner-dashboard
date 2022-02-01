import React from 'react'

import { elM6, elMt6, elWFull, FlexContainer } from '@reapit/elements'

import AgentSummary from '../../ui/dashboard-page/agentSummary'
import ApplicantSummary from '../../ui/dashboard-page/applicantSummary'
import ChartSection from '../../ui/dashboard-page/chartSection'
import PropertiesSummary from '../../ui/dashboard-page/propertiesSummary'

const TabletDashboardPage = () => {
  return (
    <div className={`${elWFull} ${elM6}`}>
      <FlexContainer className={`${elWFull}`} isFlexJustifyBetween>
        <div style={{ width: '32%' }}>
          <PropertiesSummary />
        </div>
        <div style={{ width: '32%' }}>
          <AgentSummary />
        </div>
        <div style={{ width: '32%' }}>
          <ApplicantSummary />
        </div>
      </FlexContainer>
      <FlexContainer className={`${elMt6} ${elWFull}`}>
        <ChartSection />
      </FlexContainer>
    </div>
  )
}

export default TabletDashboardPage
