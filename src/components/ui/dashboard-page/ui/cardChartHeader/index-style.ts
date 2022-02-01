import { css } from '@linaria/core'
import { DESKTOP_BREAKPOINT, MOBILE_BREAKPOINT } from '@reapit/elements'

export const styleTextWrapper = css`
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--color-grey-medium);
`
export const styleHeader = css`
  color: var(--color-grey-dark);
  font-weight: 600;
  font-size: var(--font-size-subheading);
  @media (max-width: ${DESKTOP_BREAKPOINT}px) {
    font-size: 1.15rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 1.05rem;
  }
`

export const styleAdditionalLinkText = css`
  font-weight: 600;
  font-size: var(--font-size-default);
  color: var(--color-blue-light2);
`
