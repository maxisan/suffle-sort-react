import TilesContainer from ".";
import { screen } from '@testing-library/react';
import { renderWithTheme } from "src/utils/testingUtils";
import { initialTiles } from "src/constants";

describe('<Header>', () => { 
  test('should render successfuly', async () => {
    renderWithTheme(<TilesContainer tiles={initialTiles}/>)
    const tiles = screen.getAllByTestId('tile')
    expect(tiles).toHaveLength(9)
    tiles.forEach((tile, index) => {
      expect(tile).toHaveTextContent(`${index + 1}`)
    })
  })
 })