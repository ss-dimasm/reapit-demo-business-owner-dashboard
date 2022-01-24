import React, { FC, ReactElement } from 'react'

import { elMt6, elWFull, FlexContainer } from '@reapit/elements'
import { leftBarWrapper, rightBarWrapper, subLeftBarInsideWrapper } from './__styles__/dashboard-page.style'

import PropertiesSummary from '../ui/dashboard-page/propertiesSummary'
import ApplicantSummary from '../ui/dashboard-page/applicantSummary'
import AgentSummary from '../ui/dashboard-page/agentSummary'
import EmployeeSection from '../ui/dashboard-page/employeeSection'
import ActivitySection from '../ui/dashboard-page/activitySection'
import ChartSection from '../ui/dashboard-page/chartSection'
import RevenueSection from '../ui/dashboard-page/revenueSection'

const DashboardPage: FC = (): ReactElement => {
  return (
    <>
      <FlexContainer isFlexJustifyBetween className={`${elWFull} el-m6`}>
        <div className={leftBarWrapper}>
          <FlexContainer className={elWFull} isFlexJustifyBetween>
            <div className={subLeftBarInsideWrapper}>
              <PropertiesSummary />
            </div>
            <div className={subLeftBarInsideWrapper}>
              <AgentSummary />
            </div>
            <div className={subLeftBarInsideWrapper}>
              <ApplicantSummary />
            </div>
          </FlexContainer>
          <div className={elWFull + ' ' + elMt6}>
            <ChartSection />
          </div>
        </div>
        <div className={rightBarWrapper}>
          <div>
            <EmployeeSection />
          </div>
          <div className={elMt6}>
            <RevenueSection />
          </div>
          <div className={elMt6}>
            <ActivitySection />
          </div>
        </div>
      </FlexContainer>
    </>
  )
}

export default DashboardPage
