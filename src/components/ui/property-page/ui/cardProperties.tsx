import { BodyText, CardWrap, elMl1, elMl5, FlexContainer, SmallText, Subtitle } from '@reapit/elements'
import { NegotiatorModel, PropertyModel } from '@reapit/foundations-ts-definitions'
import React, { FC, ReactElement, ReactNode } from 'react'
import { MdOutlineBathtub, MdOutlineBed } from 'react-icons/md'
import { propertyAddressCompiler } from '../../../../utils/navigation'
import {
  bottomDescriptionWrapper,
  cardWrapper,
  cardWrapperSelected,
  descWrapper,
  imageOptionsStyle,
  imageWrapper,
  propertiesPrice,
  propertiesTitle,
} from './__styles__/cardProperties.styles'

interface CardPropertiesProps {
  children?: ReactNode
  propertyData: PropertyModel
  selectedProperty: PropertyModel
  changeSelectedProperty: (selected: PropertyModel) => void
  // list of Negotiator
  negotiator: NegotiatorModel
}
const CardProperties: FC<CardPropertiesProps> = ({
  propertyData,
  selectedProperty,
  changeSelectedProperty,
  negotiator,
}): ReactElement => {
  /**
   * Get address information
   */
  const address = propertyAddressCompiler(propertyData)

  return (
    <>
      <CardWrap
        className={`${cardWrapper} ${
          selectedProperty && selectedProperty.id === propertyData.id && cardWrapperSelected
        }`}
        onClick={() => changeSelectedProperty(propertyData)}
      >
        <FlexContainer isFlexJustifyBetween style={{ height: '150px' }}>
          <div className={imageWrapper}>
            <img
              src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="test"
              className={imageOptionsStyle}
            />
          </div>
          <div className={descWrapper}>
            <Subtitle hasBoldText hasNoMargin className={propertiesTitle}>
              {address}
            </Subtitle>
            <BodyText>
              {propertyData.type?.length === 0 ? 'Unprovided Data' : propertyData.type} | {negotiator.name}
            </BodyText>
            <FlexContainer className={bottomDescriptionWrapper} isFlexJustifyBetween>
              <FlexContainer>
                <FlexContainer isFlexAlignCenter>
                  <MdOutlineBathtub size={'1.25rem'} color="var(--color-grey-dark)" />
                  <SmallText hasNoMargin className={elMl1}>
                    {propertyData.bathrooms}
                  </SmallText>
                </FlexContainer>
                <FlexContainer className={elMl5} isFlexAlignCenter>
                  <MdOutlineBed size={'1.25rem'} color="var(--color-grey-dark)" />
                  <SmallText hasNoMargin className={elMl1}>
                    {propertyData.bedrooms}
                  </SmallText>
                </FlexContainer>
              </FlexContainer>
              <div>
                <Subtitle hasNoMargin hasBoldText className={propertiesPrice}>
                  £ 50.000,00
                </Subtitle>
              </div>
            </FlexContainer>
          </div>
        </FlexContainer>
      </CardWrap>
    </>
  )
}

export default CardProperties
