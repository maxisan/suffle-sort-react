import React from 'react'
import breakpoints from 'src/theme/breakpoints'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: unset;
    padding: 0 2rem;
    margin-top: 1.5rem;
  }
`
const Tile = styled.div<{variant: 'primary' | 'dark'}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({variant, theme}) => theme.colors[variant]};
  border-radius: 0.5rem;
  color: white;
  font-size: 3rem;
  font-weight: 500;
  transition: all 1s ease;
  &::before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 0;
    padding-bottom: 100%;
  }
  ${breakpoints.mobile} {
    color: ${({variant, theme}) => theme.colors[variant]};
    background-color: white;
    border: 1px solid;
    border-left: 1rem solid;
    border-color: ${({variant, theme}) => theme.colors[variant]};
    font-size: 2rem;
    padding: 1rem 0;
    &::before {
      display: none;
    }
  }
`

interface Props {
  tiles: string[]
}

const TilesContainer = ({tiles}: Props) => {
  return (
    <MainContainer>
      {tiles.map((number, index) => <Tile 
        key={index} 
        variant={+number % 2 !== 0 ? 'primary' : 'dark'}
        data-testid='tile'
      >
        {number}
      </Tile>)}
    </MainContainer>
  )
}

export default TilesContainer