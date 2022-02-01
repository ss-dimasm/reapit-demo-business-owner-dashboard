import React, { createContext, FC, ReactElement, useEffect, useState } from 'react'

import { useMediaQuery } from '@reapit/elements'

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
import DesktopDashboardPage from './_query__/desktop-dashboard-page'
import TabletDashboardPage from './_query__/tablet-dashboard-page'
import MobileDashboardPage from './_query__/mobile-dashboard-page'

export interface DataContextParams {
  propertiesProperty: {
    isFetching: boolean
    totalData: number
    data: InfiniteData<PropertyModelPagedResult> | undefined
  }
  agentsProperty: {
    isFetching: boolean
    totalData: number
    data: InfiniteData<NegotiatorModelPagedResult> | undefined
  }
  applicantsProperty: {
    isFetching: boolean
    totalData: number
    data: InfiniteData<ApplicantModelPagedResult> | undefined
  }
  taskProperty: {
    isFetching: boolean
    totalData: number
    data: InfiniteData<TaskModelPagedResult> | undefined
  }
}
export const DataContext = createContext<DataContextParams | null>(null)

const DashboardPage: FC = (): ReactElement => {
  const [propertiesData, setPropertiesData] = useState<InfiniteData<PropertyModelPagedResult> | undefined>()
  const [negotiatorsData, setNegotiatorsData] = useState<InfiniteData<NegotiatorModelPagedResult> | undefined>()
  const [applicantsData, setApplicantsData] = useState<InfiniteData<ApplicantModelPagedResult> | undefined>()
  const [tasksData, setTasksData] = useState<InfiniteData<TaskModelPagedResult> | undefined>()

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

  // save all of them to states
  useEffect((): void => {
    taskFetchedData.data && setTasksData(taskFetchedData.data?.pages as any)
    propertiesFetchedData.data && setPropertiesData(propertiesFetchedData.data?.pages as any)
    applicantsFetchedData.data && setApplicantsData(applicantsFetchedData.data?.pages as any)
    agentsFetchedData.data && setNegotiatorsData(agentsFetchedData.data?.pages as any)
  }, [taskFetchedData, propertiesFetchedData, applicantsFetchedData, agentsFetchedData])

  // shareable state data with useContext
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

  const { isTablet, isMobile } = useMediaQuery()
  if (isTablet) {
    return (
      <DataContext.Provider value={contextData}>
        <TabletDashboardPage />
      </DataContext.Provider>
    )
  }

  if (isMobile) {
    return (
      <DataContext.Provider value={contextData}>
        <MobileDashboardPage />
      </DataContext.Provider>
    )
  }

  return (
    <DataContext.Provider value={contextData}>
      <DesktopDashboardPage />
    </DataContext.Provider>
  )
}

export default DashboardPage
