import { css } from '@linaria/core'
import { DESKTOP_BREAKPOINT } from '@reapit/elements'

export const totalItemsStyle = css`
  font-weight: bolder;
  font-size: 1.8rem;
  color: var(--color-grey-dark);
  margin: 0 1rem 0 0;
  @media (max-width: ${DESKTOP_BREAKPOINT}px) {
    font-size: 1.5rem;
  }
`
export const alternativeTextStyle = css`
  color: var(--color-blue-light);
  font-size: 1rem;
  @media (max-width: ${DESKTOP_BREAKPOINT}px) {
    font-size: 0.9rem;
  }
`
