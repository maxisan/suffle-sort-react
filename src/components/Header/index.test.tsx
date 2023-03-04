import Header from ".";
import { screen } from '@testing-library/react';
import { renderWithTheme } from "src/utils/testingUtils";

describe('<Header>', () => { 
  test('should render successfuly', async () => {
    renderWithTheme(<Header />)
    expect(screen.getByRole('banner')).toBeVisible();
    expect(screen.getByRole('banner')).toHaveTextContent('{Shuffle & Sort/}');
  })
 })