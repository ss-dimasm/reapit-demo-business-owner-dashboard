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

const useGetPagedApplicantsByOfficeId = (officeId: string) => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)
  return useInfiniteQuery(
    ['Paged Applicants Data with Id Office - Dashboard Page'],
    ({ pageParam = 1 }) => getPagedApplicantsByOfficeId(connectSession!, officeId, pageParam),
    {
      enabled: !!connectSession,
      keepPreviousData: true,
      staleTime: 6000,
      getNextPageParam: (lastPage) => {
        if (lastPage!._links!['next']) {
          return lastPage!.pageNumber! + 1
        }
        return undefined
      },
    },
  )
}

export default useGetPagedApplicantsByOfficeId
