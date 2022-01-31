import axios from 'axios'

import { ReapitConnectSession, useReapitConnect } from '@reapit/connect-session'
import { PropertyModelPagedResult } from '@reapit/foundations-ts-definitions'
import { useInfiniteQuery } from 'react-query'

import { BASE_HEADERS, URLS } from '../../constants/api'
import { reapitConnectBrowserSession } from '../../core/connect-session'

const getPagedPropertiesByOfficeId = async (
  connectSession: ReapitConnectSession,
  officeId: string,
  pageNumber: number,
): Promise<PropertyModelPagedResult | undefined> => {
  // ensure connectSession is exist
  if (!connectSession) return
  // get axios data
  const { data } = await axios.get(
    `${window.reapit.config.platformApiUrl}${URLS.PROPERTIES}?officeId=${officeId}&pageSize=30&pageNumber=${pageNumber}`,
    {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${connectSession.accessToken}`,
      },
    },
  )
  return data
}

const useGetPagedPropertiesByOfficeId = (officeId: string) => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)

  return useInfiniteQuery(
    ['Paged Property Data with Id Office page'],
    ({ pageParam = 1 }) => getPagedPropertiesByOfficeId(connectSession!, officeId, pageParam),
    {
      enabled: !!connectSession,
      keepPreviousData: true,
      getNextPageParam: (lastPage) => {
        if (lastPage!._links!['next'].href) {
          return lastPage!.pageNumber! + 1
        }
      },
    },
  )
}

export default useGetPagedPropertiesByOfficeId
