import React, { FC, ReactElement } from 'react'
import { CardWrap, elHFull, elMt6, elWFull, FlexContainer } from '@reapit/elements'
import { wrapperLeft, wrapperMain, wrapperRight } from './__styles__/property-page.style'
import SearchFilter from '../ui/property-page/searchFilter'
import PropertiesList from '../ui/property-page/propertiesList'

const PropertyPage: FC<{}> = (): ReactElement => {
  // query properties here
  return (
    <>
      <FlexContainer isFlexAlignCenter isFlexJustifyCenter className={elWFull}>
        <FlexContainer className={`${wrapperMain}`} isFlexJustifyBetween>
          <div className={wrapperLeft}>
            <CardWrap className={elHFull}>
              <SearchFilter />
              <div className={elMt6}>
                <PropertiesList />
              </div>
            </CardWrap>
          </div>
          <div className={wrapperRight}>
            <CardWrap className={elHFull}>Property</CardWrap>
          </div>
        </FlexContainer>
      </FlexContainer>
    </>
  )
}

export default PropertyPage
