import { Dispatch, SetStateAction } from 'react'

export interface CardChartHeaderProps {
  changeTabMenuOfCategory: (selectedCategory: ChartHeaderOption) => void
  selectedCategory: ChartHeaderOption
  setSelectedCategory: Dispatch<SetStateAction<ChartHeaderOption>>
}

export enum ChartHeaderOption {
  property = 'Property',
  agent = 'Agent',
  applicant = 'Applicant',
}

export type ChartHeaderOption2 = 'property' | 'agent' | 'applicant'
