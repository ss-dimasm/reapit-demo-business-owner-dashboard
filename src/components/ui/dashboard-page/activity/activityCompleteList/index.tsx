import { BodyText, Subtitle } from '@reapit/elements'
import { TaskModel } from '@reapit/foundations-ts-definitions'
import React, { FC, ReactElement } from 'react'
import { CardActivityContentProps } from '../../ui/cardActivityContent'
import CardActivityListContent from '../../ui/cardActivityListContent'

interface ActivityCompleteListProps extends CardActivityContentProps {
  tasksData: TaskModel[]
}

const ActivityCompleteList: FC<ActivityCompleteListProps> = ({ taskData }): ReactElement => {
  const filteredActivityList = taskData.filter((a: TaskModel) => a.completed !== '')

  if (filteredActivityList.length === 0) {
    return (
      <div className="el-mt10">
        <Subtitle hasCenteredText hasNoMargin hasGreyText>
          Activity (Completed) Not Found
        </Subtitle>
        <BodyText hasGreyText hasCenteredText>
          (not found component, will change soon)
        </BodyText>
      </div>
    )
  }

  return (
    <>
      {filteredActivityList.map((activity) => {
        return <CardActivityListContent taskData={activity as TaskModel} type="Completed" key={activity.id} />
      })}
    </>
  )
}

export default ActivityCompleteList
