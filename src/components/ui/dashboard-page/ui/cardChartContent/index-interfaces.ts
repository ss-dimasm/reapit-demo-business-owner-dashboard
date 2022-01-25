import { AgentsSubMenuListType } from '../../chart/agent/index-interfaces'
import { ApplicantsSubMenuListType } from '../../chart/applicants/index-interfaces'
import { PropertiesSubMenuListType } from '../../chart/properties/index-interfaces'
import { ChartHeaderOption } from '../cardChartHeader/index-interfaces'

export type SubMenuListType = ApplicantsSubMenuListType[] | AgentsSubMenuListType[] | PropertiesSubMenuListType[]

export interface CardChartContentProps {
  selectedCategory: ChartHeaderOption
  tabActive: number
  tabMenuOfCategory: SubMenuListType
}
