import React, { FC, ReactElement, useContext } from 'react'
import { CardWrap } from '@reapit/elements'
import { ApplicantModel } from '@reapit/foundations-ts-definitions'

import CardHeader from './ui/cardHeader'
import CardIcon from './ui/cardIcon'
import CardSummaryWrapper from './ui/cardSummaryWrapper'
import CardSummaryContent from './ui/cardSummaryContent'
import CardLoading from './ui/cardLoading'

import { DataContext, DataContextParams } from '../../pages/dashboard-page'
import { regroupArray, removeDuplicateArray } from '../../../utils/navigation'

const ApplicantSummary: FC<{}> = (): ReactElement => {
  const centralData = useContext<DataContextParams | null>(DataContext!)
  const { totalData, isFetching, data } = centralData?.applicantsProperty as DataContextParams['applicantsProperty']
  if (isFetching) return <CardLoading />

  // regroup data array
  const regroupArrData: ApplicantModel[] = regroupArray<ApplicantModel>(data as ApplicantModel[][])
  // remove duplicate data
  const removeDuplicatedData: ApplicantModel[] = removeDuplicateArray<ApplicantModel>(
    regroupArrData as ApplicantModel[],
  )
  // get applicant active
  const activeApplicant: ApplicantModel[] = removeDuplicatedData.filter((a) => a.active === true)
  // get applicant unActive
  const nonactiveApplicant: ApplicantModel[] = removeDuplicatedData.filter((a) => a.active === false)
  // get applicant new (in 1 month)
  const newApplicant: ApplicantModel[] = removeDuplicatedData.filter(
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
