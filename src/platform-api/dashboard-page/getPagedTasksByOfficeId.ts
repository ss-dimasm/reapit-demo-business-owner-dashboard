import { ReapitConnectSession, useReapitConnect } from '@reapit/connect-session'
import { TaskModelPagedResult } from '@reapit/foundations-ts-definitions'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { BASE_HEADERS, URLS } from '../../constants/api'
import { reapitConnectBrowserSession } from '../../core/connect-session'

const getPagedTasksByOfficeId = async (
  connectSession: ReapitConnectSession,
  officeId: string,
  pageNumber: number,
): Promise<TaskModelPagedResult | undefined> => {
  if (!connectSession) return
  const { data } = await axios.get(
    `${window.reapit.config.platformApiUrl}${URLS.TASKS}?officeId=${officeId}&pageSize=100&pageNumber=${pageNumber}`,
    {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${connectSession.accessToken}`,
      },
    },
  )

  return data
}

const useGetPagedTasksByOfficeId = (officeId: string) => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)
  return useInfiniteQuery(
    ['Paged Tasks Data with Id Office - Dashboard Page'],
    ({ pageParam = 1 }) => getPagedTasksByOfficeId(connectSession!, officeId, pageParam),
    {
      enabled: !!connectSession,
      keepPreviousData: true,
      getNextPageParam: (lastPage) => {
        if (lastPage!._links!['next']) {
          return lastPage!.pageNumber! + 1
        }
        return undefined
      },
    },
  )
}

export default useGetPagedTasksByOfficeId
