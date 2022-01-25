import { SubMenuListType } from '../cardChartContent/index-interfaces'

export interface CardChartTabsProps {
  tabMenuList: SubMenuListType
  activeTabMenu: number
  changeActiveTabMenu: (number: number) => void
}
