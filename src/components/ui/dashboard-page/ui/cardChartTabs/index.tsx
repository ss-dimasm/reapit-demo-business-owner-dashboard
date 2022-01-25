import React, { FC, ReactElement, useEffect, useState } from 'react'

import { Tabs, TabsOption } from '@reapit/elements'
import { CardChartTabsProps } from './index-interfaces'

const CardChartTabs: FC<CardChartTabsProps> = ({ tabMenuList, activeTabMenu, changeActiveTabMenu }): ReactElement => {
  // eslint-disable-next-line
  const [tabRefactoredMenu, setTabRefactoredMenu] = useState<TabsOption[]>()

  useEffect(() => {
    if (tabMenuList) {
      const newData: TabsOption[] = tabMenuList.map((each, index) => {
        return {
          id: index.toString(),
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
    <>
      <Tabs
        name="webhook-tabs"
        isFullWidth
        options={tabRefactoredMenu}
        onChange={(e) => changeActiveTabMenu(parseInt(e.currentTarget.value))}
      />
    </>
  )
}

export default CardChartTabs
