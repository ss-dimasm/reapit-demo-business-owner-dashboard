import { CardWrap } from '@reapit/elements'
import React from 'react'
import CardHeader from './ui/cardHeader'

const ActivitySection = () => {
  return (
    <CardWrap className="el-p0">
      <CardHeader title="Activity" additionalLinkText="More details" link="activities" />
      Activity list will appear here
    </CardWrap>
  )
}

export default ActivitySection
