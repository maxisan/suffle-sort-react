import ButtonsContainer from ".";
import { screen } from '@testing-library/react';
import { renderWithTheme } from "src/utils/testingUtils";
import { initialTiles } from "src/constants";
import userEvent from "@testing-library/user-event";

describe('<ButtonsContainer>', () => {
  const setTilesMock = jest.fn()
  const tilesMock = [...initialTiles]
  const labels = ['Shuffle', 'Sort']

  const render = () => renderWithTheme(<ButtonsContainer setTiles={setTilesMock} tiles={tilesMock} />)

  test('Should render succesfully', () => {
    render()
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
    buttons.forEach((button, index) => expect(button).toHaveTextContent(labels[index]));
    expect(screen.getByRole('img', {name: 'kraftvaerk know how to develop'})).toBeVisible()
  })

  test('Should order the tiles when click on sort', () => {
    render()
    const sortButton = screen.getByRole('button', {name: 'Sort'})
    userEvent.click(sortButton);
    expect(setTilesMock).toBeCalledWith([...initialTiles])
    expect(setTilesMock).toBeCalledTimes(1)
  })

  test('Should shuffle the tiles when click on shuffle', () => {
    render()
    const shuffleButton = screen.getByRole('button', {name: 'Shuffle'})
    userEvent.click(shuffleButton)
    expect(setTilesMock).toBeCalled()
    expect(setTilesMock).not.toBeCalledWith([...initialTiles])
    expect(setTilesMock).toBeCalledTimes(1)
  })

})