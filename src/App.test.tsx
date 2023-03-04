import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import App from './App';
import { renderWithTheme } from './utils/testingUtils';

describe('<App>', () => { 
  
  const render = () => renderWithTheme(<App />);
  
  beforeEach(() => {
    cleanup()
  })

  test('should start with ordered tiles', () => {
    render()
    const tiles = screen.getAllByTestId('tile');
    tiles.forEach((tile, index) => expect(tile).toHaveTextContent(`${index + 1}`))
  });
 })

