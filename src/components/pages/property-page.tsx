import React, { FC, ReactElement, useEffect, useState } from 'react'

import { CardWrap, elHFull, elMt6, elWFull, FlexContainer, Modal } from '@reapit/elements'
import SearchFilter from '../ui/property-page/searchFilter'
import PropertiesList from '../ui/property-page/propertiesList'
import PropertiesDetails from '../ui/property-page/propertiesDetails'

import useGetPagedPropertiesByOfficeId from '../../platform-api/property-page/getPagedPropertiesByOfficeId'
import { wrapperLeft, wrapperMain, wrapperRight } from './__styles__/property-page.style'
import { DEFAULT_OFFICE_ID } from '../../constants/settings'
import { InfiniteData } from 'react-query'
import { PropertyModelPagedResult } from '@reapit/foundations-ts-definitions'

const PropertyPage: FC<{}> = (): ReactElement => {
  // state toggler for filter modal
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  // put properties paged data to this state
  const [propertiesPagedData, setPropertiesPagedData] = useState<
    InfiniteData<PropertyModelPagedResult | undefined> | undefined
  >()

  // query paged properties here (useInfiniteQuery)
  const { hasNextPage, fetchNextPage, data } = useGetPagedPropertiesByOfficeId(DEFAULT_OFFICE_ID)

  // process putting paged properties to propertiesPagedData state
  useEffect(() => {
    if (!data) return
    setPropertiesPagedData(data.pages as any)
  }, [data])

  // make sure data
  console.log(propertiesPagedData)
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onModalClose={() => setModalIsOpen(!modalIsOpen)}
        title="Filter"
        style={{ zIndex: 1000 }}
      >
        Test
      </Modal>
      <FlexContainer isFlexAlignCenter isFlexJustifyCenter className={elWFull}>
        <FlexContainer className={`${wrapperMain}`} isFlexJustifyBetween>
          <div className={wrapperLeft}>
            <CardWrap className={elHFull}>
              <SearchFilter openFilterModal={() => setModalIsOpen(true)} />
              <div className={elMt6}>
                <PropertiesList propertiesData={data!} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />
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
