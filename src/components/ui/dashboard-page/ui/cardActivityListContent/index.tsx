import { elPy3, FlexContainer } from '@reapit/elements'
import { TaskModel } from '@reapit/foundations-ts-definitions'
import React, { FC, ReactElement } from 'react'
import { ActivityTabMenuType } from '../../activitySection'
import {
  activityText,
  dateText,
  dateWrapper,
  insideWrapper,
  typeAgentWrapper,
  typePropertyWrapper,
  typeWrapper,
  wrapper,
} from './index-style'

interface CardActivityListContentProps {
  type: ActivityTabMenuType
  taskData: TaskModel
}
const CardActivityListContent: FC<CardActivityListContentProps> = (): ReactElement => {
  return (
    <div className={wrapper}>
      <div className={insideWrapper}>
        <h3 className={activityText}>Arrange for bathroom photos to be retaken</h3>
        <FlexContainer className={elPy3}>
          <div className={typeWrapper + ' ' + typePropertyWrapper}>Property</div>
          <div className={typeWrapper + ' ' + typeAgentWrapper}>Agent</div>
        </FlexContainer>
        <div className={dateWrapper}>
          <h4 className={dateText}>2 days ago</h4>
        </div>
      </div>
    </div>
  )
}

export default CardActivityListContent
