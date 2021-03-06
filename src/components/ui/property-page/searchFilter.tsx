import { elMt4, FlexContainer, Icon, Input, InputGroup } from '@reapit/elements'
import React, { FC, ReactElement } from 'react'
import {
  countPropertiesStyle,
  filterButtonStyle,
  filterTextStyle,
  filterTextStyleWrapper,
  widthSearchBar,
  wrapper,
} from './__style__/searchFilter.style'

interface SearchFilterProps {
  openFilterModal: () => void
}

const SearchFilter: FC<SearchFilterProps> = ({ openFilterModal }): ReactElement => {
  return (
    <>
      <div className={wrapper}>
        <FlexContainer isFlexJustifyBetween isFlexAlignCenter>
          <InputGroup className={widthSearchBar}>
            <Input type="text" id="location" placeholder="Search Location" autoComplete="off" />
            <Icon icon="searchSystem" iconSize="small" />
          </InputGroup>
          <FlexContainer className={filterButtonStyle} isFlexAlignCenter onClick={openFilterModal}>
            <Icon icon="filterSystem" iconSize="small" color="var(--color-grey-light)" />
            <div className={filterTextStyleWrapper}>
              <p className={filterTextStyle}>4</p>
            </div>
          </FlexContainer>
        </FlexContainer>
        <div className={elMt4}>
          <h4 className={countPropertiesStyle}>Found 4.999 Properties</h4>
        </div>
      </div>
    </>
  )
}

export default SearchFilter
