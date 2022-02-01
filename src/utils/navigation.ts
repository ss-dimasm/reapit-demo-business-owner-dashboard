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
 * Used to regroup API array Paged Result from Reapit Resources
 * @param datas - only for paged result only
 * @returns {T3[]}
 */
export const regroupArray = <T1, T2, T3>(datas: T1[] | any): T3[] => {
  const tempArrData: T3[] = []
  datas && datas.map((data: T2 | any) => data && data._embedded.map((single: T3) => single && tempArrData.push(single)))
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
  // loop the array
  // group by month
  // if isn't exist the month, then add new
  // if the created field is exits, then sum them by 1 in the existed field

  for (let i = 0; i < propertyData.length; i++) {
    const eachData = propertyData[i] as any
    const date = new Date(eachData.created)
    const year = date.getFullYear()
    const month = ('0' + (date.getMonth() + 1)).slice(-2)

    const checkData = lineChartData[0].data.filter((a) => a.x === `${year}-${month}`)
    if (checkData.length !== 0) {
      checkData[0].y++
    } else {
      lineChartData[0].data.push({
        x: `${year}-${month}`,
        y: 1,
      })
    }
  }
  return lineChartData
}

interface PieChartInterface {
  series: number[]
  labels: string[]
}

export const filterPropertiesByStatus = (
  propertiesData: PropertyModel[],
  marketingMode: 'selling' | 'letting',
): PieChartInterface => {
  switch (marketingMode) {
    case 'selling':
      return propertiesDataOnSellForPieChart(propertiesData)
    case 'letting':
      return propertiesDataOnRentForPieChart(propertiesData)
  }
}

const propertiesDataOnSellForPieChart = (propertiesData: PropertyModel[]): PieChartInterface => {
  console.log(propertiesData)

  /**
   * - sell props
   *  - series (count of each status Property)
   *  - label (based property status)
   * - rent properties
   *  - series
   *  -label
   * @todo
   */
  const data = {
    series: [1, 3, 4],
    labels: ['available', 'unlisted', 'occupied'],
  }
  return data
}

const propertiesDataOnRentForPieChart = (propertiesData: PropertyModel[]): PieChartInterface => {
  console.log(propertiesData)
  const data = {
    series: [],
    labels: [],
  }

  return data
}
