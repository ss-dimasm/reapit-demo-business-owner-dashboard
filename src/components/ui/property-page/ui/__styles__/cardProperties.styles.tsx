import { css } from '@linaria/core'

export const cardWrapper = css`
  margin: 1rem 0 0 0;
  padding: 0;
  border-radius: 5px;
  border: 2px solid transparent;
  cursor: pointer;
`

export const cardWrapperSelected = css`
  border: 2px solid var(--color-blue-light2);
`

export const imageWrapper = css`
  width: 35%;
`

export const descWrapper = css`
  width: 64%;
  padding: 0.5rem;
  position: relative;
  overflow-wrap: break-word;
`

export const imageOptionsStyle = css`
  object-fit: cover;
  width: 100%;
  height: 150px;
  object-position: center;
  border-radius: 5px 0 0 5px;
`
export const bottomDescriptionWrapper = css`
  position: absolute;
  bottom: 1rem;
  width: 95%;
`
export const propertiesTitle = css`
  color: var(--color-grey-dark);
`

export const propertiesPrice = css`
  color: var(--color-blue-light);
`
