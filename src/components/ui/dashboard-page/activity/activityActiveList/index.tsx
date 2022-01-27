import { TaskModel } from '@reapit/foundations-ts-definitions'
import React, { FC, ReactElement } from 'react'
import { CardActivityContentProps } from '../../ui/cardActivityContent'
import CardActivityListContent from '../../ui/cardActivityListContent'
interface ActivityActiveListProps extends CardActivityContentProps {
  tasksData: TaskModel[]
}
const ActivityActiveList: FC<ActivityActiveListProps> = (): ReactElement => {
  return (
    <>
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
      <CardActivityListContent taskData={[] as TaskModel} type="Active" />
    </>
  )
}

export default ActivityActiveList
