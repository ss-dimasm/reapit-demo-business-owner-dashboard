import { PropertyModelPagedResult } from '@reapit/foundations-ts-definitions'

export type PropertiesSubMenuListType = 'On Sell' | 'On Rent' | 'Status' | 'Type' | 'Location'

export interface ChartPropertiesProps {
  tabActive: number
  tabMenuOfCategory: PropertiesSubMenuListType[]
}

export interface ChartSpecificPropertiesProps extends ChartPropertiesProps {
  propertyData: PropertyModelPagedResult | null
}
