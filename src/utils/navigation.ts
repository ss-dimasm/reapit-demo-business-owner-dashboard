import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { History } from 'history'
import { LineSeriesType } from '../components/ui/dashboard-page/chart/config-interfaces'

export const openNewPage = (uri: string) => () => {
  window.open(uri, '_blank')
}

export const navigate = (history: History, route: string) => (): void => {
  history.push(route)
}

/**
 * Used to regroup array from fetch data in React Content
 * @param data
 * @returns {T[]}
 */
export const regroupArray = <T>(data: T[][]): T[] => {
  const tempArrData: T[] = []
  for (let i = 0; i < data!.length; i++) {
    for (let j = 0; j < data[i]!.length; j++) {
      if (data) {
        const tempData = data[i]![j] as T
        tempArrData.push(tempData)
      }
    }
  }
  return tempArrData
}

/**
 * Remove duplicated array based 'id' subfield
 * @param data
 * @returns {T[]}
 */
export const removeDuplicateArray = <T>(data: any[]): T[] => {
  return data.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i) as T[]
}

/**
 *
 * @param propertyData
 * @param mode
 * @returns
 */
export const propertiesFilterMarketingMode = <T>(propertyData: T[], mode: string): T[] => {
  switch (mode as any) {
    case 'selling':
      return propertyData.filter((a: any) => a.marketingMode === 'selling')
    case 'letting':
      return propertyData.filter((a: any) => a.marketingMode === 'letting')
    default:
      return propertyData.filter((a: any) => a.marketingMode === 'sellingAndLetting')
  }
}

interface PropertiesFilterStatus {
  available: number
  occupied: number
  unlisted: number
}

export const propertiesFilterSellStatus = (propertyData: PropertyModel[]): PropertiesFilterStatus => {
  const data = {
    available: 0,
    occupied: 0,
    unlisted: 0,
  }
  for (let i = 0; i < propertyData.length; i++) {
    switch (propertyData[i]!.selling!.status as PropertyModel) {
      case 'forSale':
        data.available++
        break
      case 'soldExternally':
        data.available++
        break
      case 'forSaleUnavailable':
        data.occupied++
        break
      case 'underOfferUnavailable':
        data.occupied++
        break
      case 'completed':
        data.occupied++
        break
      default:
        data.unlisted++
    }
  }

  return data
}

export const propertiesFilterRentStatus = (propertyData: PropertyModel[]): PropertiesFilterStatus => {
  const data = {
    available: 0,
    occupied: 0,
    unlisted: 0,
  }
  for (let i = 0; i < propertyData.length; i++) {
    switch (propertyData[i]!.letting!.status as PropertyModel) {
      case 'toLet':
        data.available++
        break
      case 'tenancyFinished':
        data.available++
        break
      case 'tenancyCurrentUnavailable':
        data.available++
        break
      case 'toLetUnavailable':
        data.occupied++
        break
      case 'underOfferUnavailable':
        data.occupied++
        break
      case 'tenancyCurrent':
        data.occupied++
        break
      case 'arrangingTenancyUnavailable':
        data.occupied++
        break
      case 'arrangingTenancy':
        data.occupied++
        break
      case 'letByOtherAgent':
        data.occupied++
        break
      case 'letPrivately':
        data.occupied++
        break
      default:
        data.unlisted++
    }
  }

  return data
}

export const filterPropertiesBasedCreatedData = <T>(propertyData: T[], nameSeries: string): LineSeriesType[] => {
  const lineChartData: LineSeriesType[] = [
    {
      name: nameSeries,
      data: [],
    },
  ]

  for (let i = 0; i < propertyData.length; i++) {
    const eachData = propertyData[i] as any

    const filteredData = {
      x: eachData!.created!,
      y: 1,
    }
    lineChartData[0].data.push(filteredData)
  }
  return lineChartData
}
