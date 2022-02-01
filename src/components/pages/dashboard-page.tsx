import React, { createContext, FC, ReactElement, useEffect, useState } from 'react'

import { elMt6, elWFull, FlexContainer } from '@reapit/elements'
import { leftBarWrapper, rightBarWrapper, subLeftBarInsideWrapper } from './__styles__/dashboard-page.style'

import PropertiesSummary from '../ui/dashboard-page/propertiesSummary'
import ApplicantSummary from '../ui/dashboard-page/applicantSummary'
import AgentSummary from '../ui/dashboard-page/agentSummary'
import EmployeeSection from '../ui/dashboard-page/employeeSection'
import ActivitySection from '../ui/dashboard-page/activitySection'
import ChartSection from '../ui/dashboard-page/chartSection'
import RevenueSection from '../ui/dashboard-page/revenueSection'

import type {
  ApplicantModelPagedResult,
  NegotiatorModelPagedResult,
  PropertyModelPagedResult,
  TaskModelPagedResult,
} from '@reapit/foundations-ts-definitions'

import { DEFAULT_OFFICE_ID } from '../../constants/settings'

import useGetPagedPropertiesByOfficeId from '../../platform-api/dashboard-page/getPagedPropertiesByOfficeId'
import useGetPagedAgentsByOfficeId from '../../platform-api/dashboard-page/getPagedAgentsByOfficeId'
import useGetPagedApplicantsByOfficeId from '../../platform-api/dashboard-page/getPagedApplicantsByOfficeId'
import useGetPagedTasksByOfficeId from '../../platform-api/dashboard-page/getPagedTasksByOfficeId'

import { InfiniteData } from 'react-query'

export interface DataContextParams {
  propertiesProperty: {
    isFetching: boolean
    totalData: number
    data: InfiniteData<PropertyModelPagedResult | undefined> | undefined
  }
  agentsProperty: {
    isFetching: boolean
    totalData: number
    data: InfiniteData<NegotiatorModelPagedResult | undefined> | undefined
  }
  applicantsProperty: {
    isFetching: boolean
    totalData: number
    data: InfiniteData<ApplicantModelPagedResult | undefined> | undefined
  }
  taskProperty: {
    isFetching: boolean
    totalData: number
    data: InfiniteData<TaskModelPagedResult | undefined> | undefined
  }
}
export const DataContext = createContext<DataContextParams | null>(null)

const DashboardPage: FC = (): ReactElement => {
  const [propertiesData, setPropertiesData] = useState<InfiniteData<PropertyModelPagedResult | undefined> | undefined>()
  const [negotiatorsData, setNegotiatorsData] = useState<
    InfiniteData<NegotiatorModelPagedResult | undefined> | undefined
  >()
  const [applicantsData, setApplicantsData] = useState<
    InfiniteData<ApplicantModelPagedResult | undefined> | undefined
  >()
  const [tasksData, setTasksData] = useState<InfiniteData<TaskModelPagedResult | undefined> | undefined>()

  // fetch all pages of properties
  const propertiesFetchedData = useGetPagedPropertiesByOfficeId(DEFAULT_OFFICE_ID)
  propertiesFetchedData.hasNextPage && !propertiesFetchedData.isFetching && propertiesFetchedData.fetchNextPage()

  // fetch all pages of applicants
  const applicantsFetchedData = useGetPagedApplicantsByOfficeId(DEFAULT_OFFICE_ID)
  applicantsFetchedData.hasNextPage && !applicantsFetchedData.isFetching && applicantsFetchedData.fetchNextPage()

  // fetch all pages of negotiators
  const agentsFetchedData = useGetPagedAgentsByOfficeId(DEFAULT_OFFICE_ID)
  agentsFetchedData.hasNextPage && !agentsFetchedData.isFetching && agentsFetchedData.fetchNextPage()

  // fetch all pages of task
  const taskFetchedData = useGetPagedTasksByOfficeId(DEFAULT_OFFICE_ID)
  taskFetchedData.hasNextPage && !taskFetchedData.isFetching && taskFetchedData.fetchNextPage()

  useEffect((): void => {
    if (!taskFetchedData.data) return
    setTasksData(taskFetchedData.data?.pages as any)

    if (!propertiesFetchedData.data) return
    setPropertiesData(propertiesFetchedData.data?.pages as any)

    if (!applicantsFetchedData.data) return
    setApplicantsData(applicantsFetchedData.data?.pages as any)

    if (!agentsFetchedData.data) return
    setNegotiatorsData(agentsFetchedData.data?.pages as any)
  }, [taskFetchedData, propertiesFetchedData, applicantsFetchedData, agentsFetchedData])

  const contextData: DataContextParams = {
    propertiesProperty: {
      isFetching: propertiesFetchedData.isFetching,
      totalData: propertiesFetchedData.data?.pages[0]?.totalCount!,
      data: propertiesData,
    },
    agentsProperty: {
      isFetching: agentsFetchedData.isFetching,
      totalData: agentsFetchedData.data?.pages[0]?.totalCount!,
      data: negotiatorsData,
    },
    applicantsProperty: {
      isFetching: applicantsFetchedData.isFetching,
      totalData: applicantsFetchedData.data?.pages[0]?.totalCount!,
      data: applicantsData,
    },
    taskProperty: {
      isFetching: taskFetchedData.isFetching,
      totalData: taskFetchedData.data?.pages[0]?.totalCount!,
      data: tasksData,
    },
  }

  return (
    <DataContext.Provider value={contextData}>
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
    </DataContext.Provider>
  )
}

export default DashboardPage
