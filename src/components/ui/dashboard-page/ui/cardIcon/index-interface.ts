import { HTMLAttributes } from 'react'

import type { CardDashboardType } from '../index-interface'

export interface CardIconProps extends HTMLAttributes<HTMLElement> {
  iconType: CardDashboardType
  totalItems: number | string
  alternativeText: string
  isCenter?: boolean
}

export interface IconProps {
  iconType: CardIconProps['iconType']
}
