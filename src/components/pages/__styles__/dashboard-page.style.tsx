import { css } from '@linaria/core'
import { DESKTOP_BREAKPOINT } from '@reapit/elements'

export const leftBarWrapper = css`
  width: 74.5%;
  @media (max-width: ${DESKTOP_BREAKPOINT}px) {
    width: 69.5%;
  }
`
export const rightBarWrapper = css`
  width: 24.5%;
  @media (max-width: ${DESKTOP_BREAKPOINT}px) {
    width: 29.5%;
  }
`
export const subLeftBarInsideWrapper = css`
  width: 32.5%;
`
