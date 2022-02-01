import React from 'react'
import { elM6, elMt6, elWFull, FlexContainer } from '@reapit/elements'
import AgentSummary from '../../ui/dashboard-page/agentSummary'
import ApplicantSummary from '../../ui/dashboard-page/applicantSummary'
import ChartSection from '../../ui/dashboard-page/chartSection'

import PropertiesSummary from '../../ui/dashboard-page/propertiesSummary'
import RevenueSection from '../../ui/dashboard-page/revenueSection'

const MobileDashboardPage = () => {
  return (
    <div className={`${elM6}`}>
      <FlexContainer className={`${elWFull}`} isFlexJustifyBetween>
        <div style={{ width: '48.5%' }}>
          <PropertiesSummary />
        </div>
        <div style={{ width: '48.5%' }}>
          <AgentSummary />
        </div>
      </FlexContainer>
      <FlexContainer className={`${elWFull} ${elMt6}`} isFlexJustifyBetween>
        <div style={{ width: '48.5%' }}>
          <ApplicantSummary />
        </div>
        <div style={{ width: '48.5%' }}>
          <RevenueSection />
        </div>
      </FlexContainer>
      <div className={`${elWFull} ${elMt6}`}>
        <ChartSection />
      </div>
    </div>
  )
}

export default MobileDashboardPage
