import React, { FC, ReactElement } from 'react'
import ActivityActiveList from '../../activity/activityActiveList'
import ActivityCompleteList from '../../activity/activityCompleteList'
import CardActivityContentWrapper from '../cardActivityContentWrapper'
import type { ActivityTabMenuType } from '../../activitySection'

export interface CardActivityContentProps {
  tabMenuList: ActivityTabMenuType[]
  activeTabMenu: number
}
const CardActivityContent: FC<CardActivityContentProps> = (props): ReactElement => {
  const { tabMenuList, activeTabMenu } = props
  // fetch here

  switch (tabMenuList[activeTabMenu] as ActivityTabMenuType) {
    case 'Active':
      return (
        <>
          <CardActivityContentWrapper>
            <ActivityActiveList {...props} tasksData={[]} />
          </CardActivityContentWrapper>
        </>
      )
    case 'Completed':
      return (
        <>
          <CardActivityContentWrapper>
            <ActivityCompleteList />
          </CardActivityContentWrapper>
        </>
      )
  }
}

export default CardActivityContent
