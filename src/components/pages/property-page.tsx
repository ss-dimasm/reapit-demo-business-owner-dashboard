import React, { FC, ReactElement } from 'react'
import { elM6, elWFull, FlexContainer } from '@reapit/elements'

const PropertyPage: FC<{}> = (): ReactElement => {
  return (
    <>
      <FlexContainer isFlexJustifyBetween className={`${elWFull} ${elM6}`}>
        <div>List Property</div>
        <div>Active Property</div>
      </FlexContainer>
    </>
  )
}

export default PropertyPage
