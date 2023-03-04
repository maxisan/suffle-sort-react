import React from 'react'
import styled from 'styled-components'
import { Button } from '..'
import { ReactComponent as SvgLogo } from 'src/assets/images/kraftvaerk-logo.svg'
import { initialTiles } from 'src/constants'
import breakpoints from 'src/theme/breakpoints'

const MainContainer = styled.div`
  background-color: ${({theme}) => theme.colors.dark};
  display: grid;
  grid-template-rows: auto auto 1fr;
  padding: 2rem;
  gap: 1rem;
  ${breakpoints.mobile} {
    background-color: unset;
    display: flex;
    padding: 0 2rem;
  }
`

const LogoContainer = styled.div`
  height: fit-content;
  width: fit-content;
  align-self: flex-end;
  justify-self: end;
  margin-bottom: -1rem;
  ${breakpoints.mobile} {
    align-self: center;
    width: 100%;
    text-align: right;
    & path {
      fill: ${({theme}) => theme.colors.dark};
    }
  }
`

interface Props {
  tiles: string[];
  setTiles: (tiles: string[]) => void;
}

const ButtonsContainer = ({setTiles, tiles}:Props) => {
  const onShuffle = () => {
    const shuffledTiles = [...tiles.sort(() => 0.5 - Math.random())]
    setTiles(shuffledTiles)
  }

  const onSort = () => {
    setTiles([...initialTiles])
  }

  return (
    <MainContainer>
      <Button onClick={onShuffle} aria-label='Shuffle'>
        <img src='/icons/shuffle.svg' alt='' />
        <span className='label'>Shuffle</span>
      </Button>
      <Button onClick={onSort} aria-label='Sort'>
        <img src='/icons/sort.svg' alt='' />
        <span className='label'>Sort</span>
      </Button>
      <LogoContainer>
        <SvgLogo role='img' aria-label='kraftvaerk know how to develop'/>
      </LogoContainer>
    </MainContainer>
  )
}

export default ButtonsContainer