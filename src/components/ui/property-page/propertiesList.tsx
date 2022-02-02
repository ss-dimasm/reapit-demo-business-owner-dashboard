import React, { FC, ReactElement, useRef, useState } from 'react'

import CardProperties from './ui/cardProperties'

import { css } from '@linaria/core'
import { NegotiatorModel, PropertyModel, PropertyModelPagedResult } from '@reapit/foundations-ts-definitions'
import { InfiniteData } from 'react-query'
import CardLoading from '../cardLoading'

interface PropertiesListProps {
  // get properties paged data here
  propertiesData: InfiniteData<PropertyModelPagedResult | undefined>
  // fetch next page of loaded properties paged data
  fetchNextPage: () => void
  // ensure is loaded properties paged data have next page or not (_links.next.href)
  hasNextPage: boolean | undefined
  // check condition is page is loading or not
  isFetchingNextPage: boolean
  // make sure for selected property
  selectedProperty: PropertyModel
  // change the selected property
  changeSelectedProperty: (selected: PropertyModel) => void
  // list of Negotiator
  listOfNegotiator: NegotiatorModel[]
  // negotiator status is fetching
  isNegotiatorFetchIsFetching: boolean
}

// set up css style for properties wrapper (scrollable)
const propertiesListWrapper = css`
  height: 83vh;
  overflow-y: scroll;
`

const PropertiesList: FC<PropertiesListProps> = ({
  propertiesData,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  selectedProperty,
  changeSelectedProperty,
  listOfNegotiator,
  isNegotiatorFetchIsFetching,
}): ReactElement => {
  // set up state as a toggler
  const [isOnTheBottom, setIsOnTheBottom] = useState<boolean>(false)

  // give the properties wrapper reference with useRef
  const PropertiesListWrapper = useRef<HTMLDivElement>(null)

  const [totalIndicatorOfLoading] = useState<number>(15)

  // while data still on the way or doesn't exist
  if (!propertiesData || isNegotiatorFetchIsFetching) {
    const indicatorPreload: ReactElement[] = []
    for (let i = 0; i < totalIndicatorOfLoading; i++) indicatorPreload.push(<CardLoading key={i} />)
    return <div className={propertiesListWrapper}>{indicatorPreload}</div>
  }

  // detect the bottom of properties list wrapper
  const detectHeight = (): false | void =>
    PropertiesListWrapper.current!.clientHeight + PropertiesListWrapper.current!.scrollTop >=
      PropertiesListWrapper.current!.scrollHeight && setIsOnTheBottom(true)

  // attempt to reload if position of properties list wrapper on the bottom
  isOnTheBottom && hasNextPage && !isFetchingNextPage && (fetchNextPage(), setIsOnTheBottom(false))

  return (
    <div ref={PropertiesListWrapper} className={propertiesListWrapper} onScroll={detectHeight}>
      {propertiesData.pages.map((page) => {
        return page!._embedded!.map((property) => {
          const specificNegotiator = listOfNegotiator.filter((v) => v.id === property.negotiatorId)
          return (
            <CardProperties
              negotiator={specificNegotiator[0]}
              key={property.id}
              propertyData={property}
              selectedProperty={selectedProperty}
              changeSelectedProperty={changeSelectedProperty}
            />
          )
        })
      })}
      {isOnTheBottom && isFetchingNextPage && (
        <>
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </>
      )}
    </div>
  )
}

export default PropertiesList
