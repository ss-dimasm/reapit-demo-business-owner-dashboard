import React, { FC, ReactElement, useRef, useState } from 'react'

import CardProperties from './ui/cardProperties'

import { css } from '@linaria/core'
import { PropertyModelPagedResult } from '@reapit/foundations-ts-definitions'
import { InfiniteData } from 'react-query'
import CardLoading from '../cardLoading'

interface PropertiesListProps {
  // get properties paged data here
  propertiesData: InfiniteData<PropertyModelPagedResult | undefined>
  // fetch next page of loaded properties paged data
  fetchNextPage: () => void
  // ensure is loaded properties paged data have next page or not (_links.next.href)
  hasNextPage: boolean | undefined
}

// set up css style for properties wrapper (scrollable)
const propertiesListWrapper = css`
  height: 83vh;
  overflow-y: scroll;
`

const PropertiesList: FC<PropertiesListProps> = ({ propertiesData, fetchNextPage, hasNextPage }): ReactElement => {
  // set up state as a toggler
  const [isOnTheBottom, setIsOnTheBottom] = useState<boolean>(false)

  // give the properties wrapper reference with useRef
  const PropertiesListWrapper = useRef<HTMLDivElement>(null)

  const [totalIndicatorOfLoading] = useState<number>(15)
  // while data still on the way or doesn't exist
  if (!propertiesData) {
    const indicatorPreload: ReactElement[] = []
    for (let i = 0; i < totalIndicatorOfLoading; i++) {
      indicatorPreload.push(<CardLoading />)
    }

    return (
      <>
        <div className={propertiesListWrapper}>{indicatorPreload}</div>
      </>
    )
  }

  // detect the bottom of properties list wrapper
  const detectHeight = () =>
    PropertiesListWrapper.current!.clientHeight + PropertiesListWrapper.current!.scrollTop >=
      PropertiesListWrapper.current!.scrollHeight && setIsOnTheBottom(true)

  let loadingComponent: ReactElement[] = []
  // attempt to reload if position of properties list wrapper on the bottom
  if (isOnTheBottom && hasNextPage) {
    for (let i = 0; i < totalIndicatorOfLoading; i++) {
      loadingComponent.push(<CardLoading />)
    }
    setTimeout(() => {
      fetchNextPage()
      setIsOnTheBottom(false)
      loadingComponent = []
    }, 1000)
  }

  return (
    <div ref={PropertiesListWrapper} className={propertiesListWrapper} onScroll={detectHeight}>
      {propertiesData.pages.map((page) => {
        return page!._embedded!.map((property) => {
          return <CardProperties key={property.id} propertyData={property} />
        })
      })}
      {loadingComponent}
    </div>
  )
}

export default PropertiesList
