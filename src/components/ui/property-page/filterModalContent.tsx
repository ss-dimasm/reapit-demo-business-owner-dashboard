import React, { FC, ReactElement, useState } from 'react'

import { Button, ControlledSearchableDropdown, elMt6, FlexContainer } from '@reapit/elements'
import { NegotiatorModel } from '@reapit/foundations-ts-definitions'

import { configListOfAgentFormatted } from '../../../utils/navigation'
import { AgentSearchableDropDown } from '../../pages/property-page'

interface FilterModalContentProps {
  // get all negotiator list
  negotiatorList: NegotiatorModel[]
  selectedNegotiatorList: AgentSearchableDropDown
  changeSelectedNegotiatorList: (agent: AgentSearchableDropDown | undefined) => void
  isNegotiatorFetching: boolean
}

const FilterModalContent: FC<FilterModalContentProps> = ({
  negotiatorList,
  selectedNegotiatorList,
  isNegotiatorFetching,
  changeSelectedNegotiatorList,
}): ReactElement => {
  // eslint-disable-next-line
  const [isResultVisible, setIsResultVisible] = useState<boolean>(false)
  const [currentName, setCurrentName] = useState<string | undefined>()
  const listOfAgentFormatted = configListOfAgentFormatted<NegotiatorModel[], AgentSearchableDropDown>(negotiatorList)

  console.log('currentName', currentName!)
  return (
    <>
      <FlexContainer isFlexJustifyBetween>
        <div style={{ width: '48.5%' }}>Type</div>
        <div style={{ width: '48.5%' }}>
          {isNegotiatorFetching || listOfAgentFormatted?.length === 0 ? (
            <>Compiling</>
          ) : (
            <>
              <ControlledSearchableDropdown
                icon="usernameSystem"
                placeholder="search agent name"
                isResultsListVisible={isResultVisible}
                isClearVisible={selectedNegotiatorList ? true : false}
                loading={false}
                selectedValue={selectedNegotiatorList ? selectedNegotiatorList.label : '-'}
                resultsList={listOfAgentFormatted!}
                onChange={(e) => (e.currentTarget.value = currentName!)}
                onMouseMove={(e) => (e.currentTarget.value = currentName!)}
                onClear={() => (setIsResultVisible(false), changeSelectedNegotiatorList(undefined))}
                onKeyUp={() => setIsResultVisible(true)}
                defaultValue={selectedNegotiatorList ? selectedNegotiatorList.label : ''}
                onResultClick={(result) => {
                  setIsResultVisible(false)
                  changeSelectedNegotiatorList(result)
                  setCurrentName(result.label)
                }}
              />
            </>
          )}
        </div>
      </FlexContainer>
      <FlexContainer isFlexJustifyEnd className={elMt6}>
        <div>
          <Button chevronRight intent="critical">
            Search
          </Button>
        </div>
      </FlexContainer>
    </>
  )
}

export default FilterModalContent
