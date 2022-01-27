import { css } from '@linaria/core'

export const wrapper = css`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-grey-medium);
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-light);
  }
`
export const insideWrapper = css`
  padding: 1.25rem 0.5rem 0 0.5rem;
  position: relative;
`
export const activityText = css`
  font-size: var(--font-size-subheading);
  color: var(--color-grey-dark);
  font-weight: bold;
`
export const dateWrapper = css`
  position: absolute;
  bottom: 0;
  right: 0;
`
export const dateText = css`
  font-size: var(--font-size-small);
  color: var(--color-grey-dark);
`

export const typeWrapper = css`
  padding: 0.25rem 0.5rem;
  margin: 0 0.125rem;
  color: var(--color-grey-dark);
`
export const typePropertyWrapper = css`
  background-color: var(--intent-secondary-light);
`
export const typeAgentWrapper = css`
  background-color: var(--intent-danger-light);
`
