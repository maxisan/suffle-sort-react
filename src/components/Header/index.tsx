import React from 'react';
import breakpoints from 'src/theme/breakpoints';
import styled from 'styled-components';

const ColoredDivisor = styled.span`
  color: ${({theme}) => theme.colors.primary};
  
  ${breakpoints.mobile} {
    color: unset;
  }
`;

const StyledHeader = styled.header`
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  padding: 0 2rem;

  ${breakpoints.mobile} {
    background-color: ${({theme}) => theme.colors.dark};
    color: white;
    font-weight: 400;
    font-size: 1rem;
    height: 3rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      {'{Shuffle & Sort'}<ColoredDivisor>/</ColoredDivisor>{'}'}
    </StyledHeader>
  )
}

export default Header