import { CardWrap, Title } from '@reapit/elements'
import React from 'react'
import { cardWrapper, imageWrapper } from './__styles__/cardWrapper.style'

const PropertiesDetailsCardWrapper = () => {
  // properties src here
  return (
    <CardWrap className={cardWrapper}>
      <div>
        <img
          alt="test"
          src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className={imageWrapper}
        />
      </div>
      <div>
        <Title>Midlands, Avenue</Title>
        <Title>Midlands, Avenue</Title>
        <Title>Midlands, Avenue</Title>
        <Title>Midlands, Avenue</Title>
        <Title>Midlands, Avenue</Title>
        <Title>Midlands, Avenue</Title>
        <Title>Midlands, Avenue</Title>
        <Title>Midlands, Avenue</Title>
        <Title>Midlands, Avenue</Title>
        <Title>Midlands, Avenue</Title>
        <Title>Midlands, Avenue</Title>
      </div>
    </CardWrap>
  )
}

export default PropertiesDetailsCardWrapper
