import { ReapitConnectSession } from '@reapit/connect-session'
import { PropertyModelPagedResult } from '@reapit/foundations-ts-definitions'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { BASE_HEADERS, URLS } from '../../constants/api'

const getPagedPropertiesByOfficeId = async (
  connectSession: ReapitConnectSession,
  officeId: string,
  pageNumber: number,
): Promise<PropertyModelPagedResult | undefined> => {
  if (!connectSession) return
  const { data } = await axios.get(
    `${window.reapit.config.platformApiUrl}${URLS.PROPERTIES}?officeId=${officeId}&pageSize=700&pageNumber=${pageNumber}`,
    {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${connectSession.accessToken}`,
      },
    },
  )

  return data
}

const useGetPagedPropertiesByOfficeId = (
  connectSession: ReapitConnectSession,
  officeId: string,
  pageParam: number = 7,
) => {
  return useInfiniteQuery(
    ['Paged Property Data with Id Office', officeId],
    () => getPagedPropertiesByOfficeId(connectSession, officeId, pageParam),
    {
      enabled: !!connectSession,
      getNextPageParam: (lastPage) => {
        console.log(lastPage)
        if (lastPage?._links!.next.href) {
          pageParam = pageParam + 1
          return lastPage?._links!.next.href
        } else {
          return undefined
        }
      },
    },
  )
}

export default useGetPagedPropertiesByOfficeId
