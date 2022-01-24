import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export interface CardChartHeaderProps {
  changeCategory: (
    selectedCategory: Dispatch<SetStateAction<ChartHeaderOption>>,
  ) => (event: ChangeEvent<HTMLSelectElement>) => void
  selectedCategory: ChartHeaderOption
  setSelectedCategory: Dispatch<SetStateAction<ChartHeaderOption>>
}

export enum ChartHeaderOption {
  property = 'Property',
  agent = 'Agent',
  applicant = 'Applicant',
}

export type ChartHeaderOption2 = 'property' | 'agent' | 'applicant'
