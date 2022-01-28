import { css } from '@linaria/core'

export const wrapper = css`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-grey-medium);
`
export const widthSearchBar = css`
  width: 80%;
  margin-top: 0.25rem;
`
export const filterButtonStyle = css`
  border: 1px solid var(--color-grey-medium);
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-medium);
  }
`
export const filterTextStyleWrapper = css`
  margin-left: 0.5rem;
`
export const filterTextStyle = css`
  color: var(--color-white);
  font-size: 0.7rem;
  padding: 0.1rem 0.25rem;
  background-color: var(--intent-critical);
  border-radius: 50%;
`

export const countPropertiesStyle = css`
  font-size: 0.85rem;
  color: var(--color-grey-dark);
`
