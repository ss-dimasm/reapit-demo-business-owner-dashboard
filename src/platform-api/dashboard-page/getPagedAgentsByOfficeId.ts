import { ReapitConnectSession, useReapitConnect } from '@reapit/connect-session'
import { NegotiatorModelPagedResult } from '@reapit/foundations-ts-definitions'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { BASE_HEADERS, URLS } from '../../constants/api'
import { reapitConnectBrowserSession } from '../../core/connect-session'

const getPagedAgentsByOfficeId = async (
  connectSession: ReapitConnectSession,
  officeId: string,
  pageNumber: number,
): Promise<NegotiatorModelPagedResult | undefined> => {
  if (!connectSession) return
  const { data } = await axios.get(
    `${window.reapit.config.platformApiUrl}${URLS.AGENTS}?officeId=${officeId}&pageSize=100&pageNumber=${pageNumber}`,
    {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${connectSession.accessToken}`,
      },
    },
  )

  return data
}

const useGetPagedAgentsByOfficeId = (officeId: string, pageParam: number) => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)
  return useInfiniteQuery(
    ['Paged Agents Data with Id Office page', pageParam],
    () => getPagedAgentsByOfficeId(connectSession!, officeId, pageParam),
    {
      enabled: !!connectSession,
      keepPreviousData: true,
      getNextPageParam: (lastPage) => {
        if (lastPage!.pageNumber! <= lastPage!.totalPageCount!) {
          return true
        }
      },
    },
  )
}

export default useGetPagedAgentsByOfficeId
