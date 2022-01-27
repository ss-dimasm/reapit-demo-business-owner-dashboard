/* eslint-disable  */
import { Tabs, TabsOption } from '@reapit/elements'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import { ActivityTabMenuType } from '../../activitySection'

interface CardActivityTabsProps {
  tabMenuList: ActivityTabMenuType[]
  activeTabMenu: number
  changeTheTabActiveMenu: (number: number) => void
}
const CardActivityTabs: FC<CardActivityTabsProps> = ({
  tabMenuList,
  activeTabMenu,
  changeTheTabActiveMenu,
}): ReactElement => {
  const [tabRefactoredMenu, setTabRefactoredMenu] = useState<TabsOption[]>()

  useEffect(() => {
    if (tabMenuList) {
      const newData: TabsOption[] = tabMenuList.map((each, index): TabsOption => {
        return {
          id: 'activity-' + index.toString(),
          value: index.toString(),
          text: each,
          isChecked: index === activeTabMenu,
        }
      })
      setTabRefactoredMenu(newData)
    }
  }, [tabMenuList, activeTabMenu])

  if (!tabRefactoredMenu) return <h1>wait</h1>

  return (
    <Tabs
      name="activity-tabs"
      isFullWidth
      options={tabRefactoredMenu}
      onChange={(e) => changeTheTabActiveMenu(parseInt(e.currentTarget.value))}
    />
  )
}

export default CardActivityTabs
