import React, { FC, ReactElement, useContext } from 'react'
import { CardWrap } from '@reapit/elements'
import CardHeader from './ui/cardHeader'
import CardIcon from './ui/cardIcon'
import CardSummaryWrapper from './ui/cardSummaryWrapper'
import CardSummaryContent from './ui/cardSummaryContent'
import { DataContext, DataContextParams } from '../../pages/dashboard-page'
import CardLoading from './ui/cardLoading'

const ApplicantSummary: FC<{}> = (): ReactElement => {
  const centralData = useContext<DataContextParams | null>(DataContext!)
  if (centralData!.applicantsProperty.isFetching) return <CardLoading />

  return (
    <>
      <CardWrap className="el-p0">
        <CardHeader title="Applicant" additionalLinkText="See all applicants" link="summary/applicant" />
        <CardIcon iconType="applicant" totalItems={22} alternativeText="Applicants" />
        <CardSummaryWrapper>
          <CardSummaryContent totalCount={10} alternativeText="Active" />
          <CardSummaryContent totalCount={5} alternativeText="Unactive" isCenterPosition />
          <CardSummaryContent totalCount={7} alternativeText="New" />
        </CardSummaryWrapper>
      </CardWrap>
    </>
  )
}

export default ApplicantSummary
