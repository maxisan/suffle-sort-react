import React from 'react'
import breakpoints from 'src/theme/breakpoints'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  color: ${({theme}) => theme.colors.grayLight};
  font-size: 0.85rem;
  margin: 2rem 0;
  ${breakpoints.mobile} {
    margin: 1rem 0;
  }
`

const Footer = () => {
  return (
    <StyledFooter>Shuffle & sort by Maximiliano Sanchez</StyledFooter>
  )
}

export default Footer