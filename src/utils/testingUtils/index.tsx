import { render, RenderResult } from "@testing-library/react";
import { ReactElement } from "react";
import mainTheme, { Theme } from "src/theme";
import { ThemeProvider } from "styled-components";

export const renderWithTheme = (component:ReactElement, theme:Theme = mainTheme):RenderResult => render(
  <ThemeProvider theme={theme}>
    {component}
  </ThemeProvider>
)

const testingUtils = {
  renderWithTheme
}

export default testingUtils