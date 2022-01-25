import React, { FC, ReactElement } from 'react'

import { FlexContainer, Select } from '@reapit/elements'
import { styleHeader, styleTextWrapper } from './index-style'

import { CardChartHeaderProps, ChartHeaderOption } from './index-interfaces'

const CardChartHeader: FC<CardChartHeaderProps> = (props): ReactElement => {
  const { changeTabMenuOfCategory, selectedCategory } = props

  return (
    <div>
      <FlexContainer isFlexJustifyBetween isFlexAlignCenter className={styleTextWrapper}>
        <h3 className={styleHeader}>{selectedCategory} Summary</h3>
        <div>
          <Select
            defaultValue={selectedCategory}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              changeTabMenuOfCategory(e.currentTarget.value as ChartHeaderOption)
            }
          >
            <option value={ChartHeaderOption.property}>{ChartHeaderOption.property}</option>
            <option value={ChartHeaderOption.agent}>{ChartHeaderOption.agent}</option>
            <option value={ChartHeaderOption.applicant}>{ChartHeaderOption.applicant}</option>
          </Select>
        </div>
      </FlexContainer>
    </div>
  )
}

export default CardChartHeader
