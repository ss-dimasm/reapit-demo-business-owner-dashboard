import React, { FC, ReactElement, useEffect, useState } from 'react'

import { CardWrap, elHFull, elMt6, elWFull, FlexContainer, Modal } from '@reapit/elements'
import SearchFilter from '../ui/property-page/searchFilter'
import PropertiesList from '../ui/property-page/propertiesList'
import PropertiesDetails from '../ui/property-page/propertiesDetails'

import useGetPagedPropertiesByOfficeId from '../../platform-api/property-page/getPagedPropertiesByOfficeId'
import { wrapperLeft, wrapperMain, wrapperRight } from './__styles__/property-page.style'
import { DEFAULT_OFFICE_ID } from '../../constants/settings'
import { NegotiatorModel, NegotiatorModelPagedResult, PropertyModel } from '@reapit/foundations-ts-definitions'
import useGetPagedAgentsByOfficeId from '../../platform-api/dashboard-page/getPagedAgentsByOfficeId'
import { regroupArray } from '../../utils/navigation'
import { InfiniteData } from 'react-query'
import FilterModalContent from '../ui/property-page/filterModalContent'

export type AgentSearchableDropDown = {
  label: string
  result: string
}

const PropertyPage: FC<{}> = (): ReactElement => {
  // state toggler for filter modal
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [selectedProperty, setSelectedProperty] = useState<PropertyModel | undefined>()

  // filter modal state zone
  const [selectedNegotiatorId, setSelectedNegotiatorId] = useState<AgentSearchableDropDown | undefined>()

  // query paged properties here (useInfiniteQuery)
  const propertiesFetchedData = useGetPagedPropertiesByOfficeId(DEFAULT_OFFICE_ID)

  // load all paged negotiator
  const negotiatorFetchedData = useGetPagedAgentsByOfficeId(DEFAULT_OFFICE_ID)

  const listOfNegotiator = regroupArray<
    InfiniteData<NegotiatorModelPagedResult>,
    NegotiatorModelPagedResult,
    NegotiatorModel
  >(negotiatorFetchedData.data && negotiatorFetchedData.data.pages)

  // process putting paged properties to propertiesPagedData state
  useEffect(() => {
    propertiesFetchedData.data &&
      !selectedProperty &&
      setSelectedProperty(propertiesFetchedData.data.pages[0]!._embedded![0])
  }, [propertiesFetchedData.data])

  // change selected property
  const changeSelectedProperty = (propertyData: PropertyModel): void => setSelectedProperty(propertyData)

  // change selected negotiator on filter modal
  const changeSelectedNegotiator = (agent: AgentSearchableDropDown | undefined): void => setSelectedNegotiatorId(agent)

  console.log(selectedNegotiatorId)
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onModalClose={() => setModalIsOpen(!modalIsOpen)}
        title="Filter"
        style={{ zIndex: 1000 }}
      >
        <FilterModalContent
          negotiatorList={listOfNegotiator}
          selectedNegotiatorList={selectedNegotiatorId!}
          changeSelectedNegotiatorList={changeSelectedNegotiator}
          isNegotiatorFetching={negotiatorFetchedData.isLoading}
        />
      </Modal>
      <FlexContainer isFlexAlignCenter isFlexJustifyCenter className={elWFull}>
        <FlexContainer className={`${wrapperMain}`} isFlexJustifyBetween>
          <div className={wrapperLeft}>
            <CardWrap className={elHFull}>
              <SearchFilter openFilterModal={() => setModalIsOpen(true)} />
              <div className={elMt6}>
                <PropertiesList
                  propertiesData={propertiesFetchedData.data!}
                  fetchNextPage={propertiesFetchedData.fetchNextPage}
                  hasNextPage={propertiesFetchedData.hasNextPage}
                  isFetchingNextPage={propertiesFetchedData.isFetchingNextPage}
                  selectedProperty={selectedProperty!}
                  changeSelectedProperty={changeSelectedProperty}
                  listOfNegotiator={listOfNegotiator}
                  isNegotiatorFetchIsFetching={negotiatorFetchedData.isLoading}
                />
              </div>
            </CardWrap>
          </div>
          <div className={wrapperRight}>
            <CardWrap className={elHFull}>
              <PropertiesDetails />
            </CardWrap>
          </div>
        </FlexContainer>
      </FlexContainer>
    </>
  )
}

export default PropertyPage
