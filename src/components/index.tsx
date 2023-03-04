import breakpoints from 'src/theme/breakpoints';
import styled from 'styled-components';

export const MainContent = styled.main`
  width: 100%;
  border-radius: 2rem;
  background-color: white;
  display: grid;
  grid-template-columns: 2fr 1fr;
  overflow: hidden;
  margin: 1rem 0;
  box-shadow: 0px 4px 32px rgba(47, 47, 47, 0.2);
  ${breakpoints.mobile} {
    display: flex;
    flex-direction: column-reverse;
    background-color: unset;
    box-shadow: none;
  }
`

export const Button = styled.button`
  background-color: ${({theme}) => theme.colors.primary};
  border: none;
  width: 100%;
  border-radius: 0.5rem;
  height: 4rem;
  color: white;
  font-size: 1.5rem;
  text-align: left;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  transition: box-shadow 0.2s ease-in-out, background-color 0.5s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #b25a50;
  }

  ${breakpoints.mobile} {
    width: 4rem;
    height: 4rem;
    align-items: center;
    justify-content: center;
    .label {
      display: none;
    }
  }
`