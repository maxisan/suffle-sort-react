import Footer from ".";
import { screen } from '@testing-library/react';
import { renderWithTheme } from "src/utils/testingUtils";

describe('<Footer>', () => { 
  test('should render successfuly', async () => {
    renderWithTheme(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeVisible();
    expect(screen.getByRole('contentinfo')).toHaveTextContent('Shuffle & sort by Maximiliano Sanchez');
  })
 })