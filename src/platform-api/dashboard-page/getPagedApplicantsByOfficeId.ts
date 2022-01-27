import { ReapitConnectSession, useReapitConnect } from '@reapit/connect-session'
import { ApplicantModelPagedResult } from '@reapit/foundations-ts-definitions'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { BASE_HEADERS, URLS } from '../../constants/api'
import { reapitConnectBrowserSession } from '../../core/connect-session'

const getPagedApplicantsByOfficeId = async (
  connectSession: ReapitConnectSession,
  officeId: string,
  pageNumber: number,
): Promise<ApplicantModelPagedResult | undefined> => {
  if (!connectSession) return
  const { data } = await axios.get(
    `${window.reapit.config.platformApiUrl}${URLS.APPLICANTS}?officeId=${officeId}&pageSize=100&pageNumber=${pageNumber}`,
    {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${connectSession.accessToken}`,
      },
    },
  )

  return data
}

const useGetPagedApplicantsByOfficeId = (officeId: string, pageParam: number) => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)
  return useInfiniteQuery(
    ['Paged Applicants Data with Id Office page', pageParam],
    () => getPagedApplicantsByOfficeId(connectSession!, officeId, pageParam),
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

export default useGetPagedApplicantsByOfficeId
