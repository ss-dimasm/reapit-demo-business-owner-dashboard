import { CardWrap } from '@reapit/elements'
import React from 'react'
import CardHeader from './ui/cardHeader'
import CardIcon from './ui/cardIcon'

const RevenueSection = () => {
  return (
    <CardWrap className="el-p0">
      <CardHeader title="Revenue" additionalLinkText="More details" link="summary/revenue" />
      <CardIcon iconType="revenue" totalItems="£ 1.500,00" alternativeText="This Month Revenue" isCenter />
    </CardWrap>
  )
}

export default RevenueSection
