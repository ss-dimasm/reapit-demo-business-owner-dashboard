import { FlexContainer, Select } from '@reapit/elements'
import React, { FC, ReactElement } from 'react'
import { styleHeader, styleTextWrapper } from './index-style'
import { CardChartHeaderProps, ChartHeaderOption } from './index-interfaces'

const CardChartHeader: FC<CardChartHeaderProps> = (props): ReactElement => {
  const { changeCategory, selectedCategory, setSelectedCategory } = props

  return (
    <div>
      <FlexContainer isFlexJustifyBetween isFlexAlignCenter className={styleTextWrapper}>
        <h3 className={styleHeader}>{selectedCategory} Summary</h3>
        <div>
          <Select defaultValue={selectedCategory} onChange={changeCategory(setSelectedCategory)}>
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
