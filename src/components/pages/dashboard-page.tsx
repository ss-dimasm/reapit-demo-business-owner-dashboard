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
  ContactModelPagedResult,
  NegotiatorModelPagedResult,
  PropertyModelPagedResult,
  TaskModelPagedResult,
} from '@reapit/foundations-ts-definitions'
import useGetPagedPropertiesByOfficeId from '../../platform-api/dashboard-page/getPagedPropertiesByOfficeId'
import { DEFAULT_OFFICE_ID } from '../../constants/settings'
import useGetPagedAgentsByOfficeId from '../../platform-api/dashboard-page/getPagedAgentsByOfficeId'
import useGetPagedApplicantsByOfficeId from '../../platform-api/dashboard-page/getPagedApplicantsByOfficeId'
import useGetPagedContactsByOfficeId from '../../platform-api/dashboard-page/getPagedContactsByOfficeId'
import useGetPagedTasksByOfficeId from '../../platform-api/dashboard-page/getPagedTasksByOfficeId'

export interface DataContextParams {
  propertiesProperty: {
    isFetching: boolean
    data: PropertyModelPagedResult['_embedded'][]
  }
  agentsProperty: {
    isFetching: boolean
    data: NegotiatorModelPagedResult['_embedded'][]
  }
  applicantsProperty: {
    isFetching: boolean
    data: ApplicantModelPagedResult['_embedded'][]
  }
  contactProperty: {
    isFetching: boolean
    data: ContactModelPagedResult['_embedded'][]
  }
  taskProperty: {
    isFetching: boolean
    data: TaskModelPagedResult['_embedded'][]
  }
}
export const DataContext = createContext<DataContextParams | null>(null)

const DashboardPage: FC = (): ReactElement => {
  const [propertyPageNumber, setPropertyPageNumber] = useState<number>(1)
  const [agentPageNumber, setAgentPageNumber] = useState<number>(1)
  const [applicantPageNumber, setApplicantPageNumber] = useState<number>(1)
  const [contactPageNumber, setContactPageNumber] = useState<number>(1)
  const [taskPageNumber, setTaskPageNumber] = useState<number>(1)

  const [propertiesData, setPropertiesData] = useState<PropertyModelPagedResult['_embedded'][]>([])
  const [negotiatorsData, setNegotiatorsData] = useState<NegotiatorModelPagedResult['_embedded'][]>([])
  const [applicantsData, setApplicantsData] = useState<ApplicantModelPagedResult['_embedded'][]>([])
  const [contactsData, setContactsData] = useState<ContactModelPagedResult['_embedded'][]>([])
  const [tasksData, setTasksData] = useState<TaskModelPagedResult['_embedded'][]>([])

  useEffect((): void => {
    if (!propertiesFetchedData.data) return
    const propertyTempData = propertiesFetchedData.data!.pages[0]?._embedded as PropertyModelPagedResult['_embedded']
    propertyTempData!.length >= 1 && setPropertiesData((oldArray) => [...oldArray, propertyTempData])

    if (!agentsFetchedData.data) return
    const agentTempData = agentsFetchedData.data!.pages[0]?._embedded as NegotiatorModelPagedResult['_embedded']
    agentTempData!.length >= 1 && setNegotiatorsData((oldArray) => [...oldArray, agentTempData])

    if (!applicantsFetchedData.data) return
    const applicantTempData = applicantsFetchedData.data!.pages[0]?._embedded as ApplicantModelPagedResult['_embedded']
    applicantTempData!.length >= 1 && setApplicantsData((oldArray) => [...oldArray, applicantTempData])

    if (!contactsFetchedData.data) return
    const contactTempData = contactsFetchedData.data!.pages[0]?._embedded as ContactModelPagedResult['_embedded']
    contactTempData!.length >= 1 && setContactsData((oldArray) => [...oldArray, contactTempData])

    if (!taskFetchedData.data) return
    const taskTempData = taskFetchedData.data!.pages[0]?._embedded as TaskModelPagedResult['_embedded']
    taskTempData!.length >= 1 && setTasksData((oldArray) => [...oldArray, taskTempData])
  }, [propertyPageNumber, agentPageNumber, applicantPageNumber, contactPageNumber, taskPageNumber])

  // fetch all pages of properties
  const propertiesFetchedData = useGetPagedPropertiesByOfficeId(DEFAULT_OFFICE_ID, propertyPageNumber)
  if (propertiesFetchedData.hasNextPage) {
    setPropertyPageNumber((lastState) => lastState + 1)
  }

  // fetch all pages of negotiators
  const agentsFetchedData = useGetPagedAgentsByOfficeId(DEFAULT_OFFICE_ID, agentPageNumber)
  if (agentsFetchedData.hasNextPage) {
    setAgentPageNumber((lastState) => lastState + 1)
  }

  // fetch all pages of applicants
  const applicantsFetchedData = useGetPagedApplicantsByOfficeId(DEFAULT_OFFICE_ID, applicantPageNumber)
  if (applicantsFetchedData.hasNextPage) {
    setApplicantPageNumber((lastState) => lastState + 1)
  }

  // fetch all pages of contacts
  const contactsFetchedData = useGetPagedContactsByOfficeId(DEFAULT_OFFICE_ID, contactPageNumber)
  if (contactsFetchedData.hasNextPage) {
    setContactPageNumber((lastState) => lastState + 1)
  }

  // fetch all pages of task
  const taskFetchedData = useGetPagedTasksByOfficeId(DEFAULT_OFFICE_ID, taskPageNumber)
  if (taskFetchedData.hasNextPage) {
    setTaskPageNumber((lastState) => lastState + 1)
  }
  // @todo fetch task, news, transaction

  const contextData: DataContextParams = {
    propertiesProperty: {
      isFetching: propertiesFetchedData.isFetching,
      data: propertiesData,
    },
    agentsProperty: {
      isFetching: agentsFetchedData.isFetching,
      data: negotiatorsData,
    },
    applicantsProperty: {
      isFetching: applicantsFetchedData.isFetching,
      data: applicantsData,
    },
    contactProperty: {
      isFetching: contactsFetchedData.isFetching,
      data: contactsData,
    },
    taskProperty: {
      isFetching: taskFetchedData.isFetching,
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
