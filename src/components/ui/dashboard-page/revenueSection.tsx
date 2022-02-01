import React from 'react'
import { CardWrap, elMt8 } from '@reapit/elements'
import CardHeader from './ui/cardHeader'
import CardIcon from './ui/cardIcon'

const RevenueSection = () => {
  return (
    <CardWrap className="el-p0" style={{ height: '100%' }}>
      <CardHeader title="Revenue" additionalLinkText="More details" link="summary/revenue" />
      <CardIcon
        iconType="revenue"
        totalItems="£ 1.500,00"
        alternativeText="This Month Revenue"
        isCenter
        className={`${elMt8}`}
      />
    </CardWrap>
  )
}

export default RevenueSection
