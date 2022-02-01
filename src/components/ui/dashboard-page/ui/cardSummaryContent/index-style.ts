import { css } from '@linaria/core'
import { DESKTOP_BREAKPOINT } from '@reapit/elements'

export const wrapper = css`
  width: 33%;
`
export const wrapperCenter = css`
  border-left: 1px solid var(--color-blue-light);
  border-right: 1px solid var(--color-blue-light);
`
export const totalCountStyle = css`
  font-weight: bold;
  font-size: var(--font-size-subheading);
  color: var(--color-grey-dark);
  @media (max-width: ${DESKTOP_BREAKPOINT}px) {
    font-size: 1rem;
  }
`
export const alternativeTextStyle = css`
  font-size: var(--font-size-default);
  color: var(--color-blue-light2);
  @media (max-width: ${DESKTOP_BREAKPOINT}px) {
    font-size: 0.1rem;
  }
`
