import React, { FC, ReactElement, useContext } from 'react'
import { CardWrap } from '@reapit/elements'

import CardHeader from './ui/cardHeader'
import CardIcon from './ui/cardIcon'
import CardSummaryWrapper from './ui/cardSummaryWrapper'
import CardSummaryContent from './ui/cardSummaryContent'
import CardLoading from './ui/cardLoading'

import { DataContext, DataContextParams } from '../../pages/dashboard-page'
import { InfiniteData } from 'react-query'
import { regroupArray } from '../../../utils/navigation'
import { ApplicantModel, ApplicantModelPagedResult } from '@reapit/foundations-ts-definitions'

const ApplicantSummary: FC<{}> = (): ReactElement => {
  const centralData = useContext<DataContextParams | null>(DataContext!)
  const { totalData, isFetching, data } = centralData?.applicantsProperty as DataContextParams['applicantsProperty']
  if (isFetching) return <CardLoading />

  // regroup data array
  const regroupArr = regroupArray<InfiniteData<ApplicantModelPagedResult>, ApplicantModelPagedResult, ApplicantModel>(
    data,
  )

  // get applicant active
  const activeApplicant: ApplicantModel[] = regroupArr.filter((a) => a.active === true)
  // get applicant unActive
  const nonactiveApplicant: ApplicantModel[] = regroupArr.filter((a) => a.active === false)
  // get applicant new (in 1 month)
  const newApplicant: ApplicantModel[] = regroupArr.filter(
    (a) => new Date(a.created as string) > new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000),
  )

  return (
    <>
      <CardWrap className="el-p0">
        <CardHeader title="Applicant" additionalLinkText="See all applicants" link="summary/applicant" />
        <CardIcon iconType="applicant" totalItems={totalData} alternativeText="Applicants" />
        <CardSummaryWrapper>
          <CardSummaryContent totalCount={activeApplicant.length} alternativeText="Active" />
          <CardSummaryContent totalCount={nonactiveApplicant.length} alternativeText="Unactive" isCenterPosition />
          <CardSummaryContent totalCount={newApplicant.length} alternativeText="New" />
        </CardSummaryWrapper>
      </CardWrap>
    </>
  )
}

export default ApplicantSummary
