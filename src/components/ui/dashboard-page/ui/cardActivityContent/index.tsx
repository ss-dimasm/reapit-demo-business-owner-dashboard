import React, { FC, ReactElement } from 'react'
import ActivityActiveList from '../../activity/activityActiveList'
import ActivityCompleteList from '../../activity/activityCompleteList'
import CardActivityContentWrapper from '../cardActivityContentWrapper'
import type { ActivityTabMenuType } from '../../activitySection'
import { TaskModel } from '@reapit/foundations-ts-definitions'

export interface CardActivityContentProps {
  tabMenuList: ActivityTabMenuType[]
  activeTabMenu: number
  taskData: TaskModel[]
}
const CardActivityContent: FC<CardActivityContentProps> = (props): ReactElement => {
  const { tabMenuList, activeTabMenu, taskData } = props
  // fetch here

  switch (tabMenuList[activeTabMenu] as ActivityTabMenuType) {
    case 'Active':
      return (
        <>
          <CardActivityContentWrapper>
            <ActivityActiveList {...props} tasksData={taskData} />
          </CardActivityContentWrapper>
        </>
      )
    case 'Completed':
      return (
        <>
          <CardActivityContentWrapper>
            <ActivityCompleteList {...props} tasksData={taskData} />
          </CardActivityContentWrapper>
        </>
      )
  }
}

export default CardActivityContent
