import React, { FC, ReactElement, useContext, useState } from 'react'

import { CardWrap } from '@reapit/elements'
import CardActivityContent from './ui/cardActivityContent'
import CardActivityTabs from './ui/cardActivityTabs'
import CardHeader from './ui/cardHeader'
import { DataContext, DataContextParams } from '../../pages/dashboard-page'
import CardLoading from './ui/cardLoading'
import { TaskModel } from '@reapit/foundations-ts-definitions'
import { regroupArray, removeDuplicateArray } from '../../../utils/navigation'

export type ActivityTabMenuType = 'Active' | 'Completed'

const ACTIVITY_TAB_MENU: ActivityTabMenuType[] = ['Active', 'Completed']

const ActivitySection: FC<{}> = (): ReactElement => {
  const centralData = useContext<DataContextParams | null>(DataContext!)
  const { isFetching, data } = centralData?.taskProperty as DataContextParams['taskProperty']

  if (isFetching) return <CardLoading height={400} />

  // regroup data
  const regroupArrData: TaskModel[] = regroupArray<TaskModel>(data as TaskModel[][])
  // remove duplicate data
  const removeDuplicatedData: TaskModel[] = removeDuplicateArray<TaskModel>(regroupArrData as TaskModel[])

  const [tabActiveMenu, setTabActiveMenu] = useState<number>(0)
  const [tabMenuOfCategory] = useState<ActivityTabMenuType[]>(ACTIVITY_TAB_MENU)

  const changeTheTabActiveMenu = (number: number): void => {
    setTabActiveMenu(number)
  }

  return (
    <CardWrap className="el-p0">
      <CardHeader title="Activity" additionalLinkText="More details" link="activities" />
      <CardActivityTabs
        activeTabMenu={tabActiveMenu}
        tabMenuList={tabMenuOfCategory}
        changeTheTabActiveMenu={changeTheTabActiveMenu}
      />
      <CardActivityContent
        activeTabMenu={tabActiveMenu}
        tabMenuList={tabMenuOfCategory}
        taskData={removeDuplicatedData}
      />
    </CardWrap>
  )
}

export default ActivitySection
