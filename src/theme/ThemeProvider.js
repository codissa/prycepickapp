import React from "react";
import { createMuiTheme, ThemeProvider as Provider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const ThemeProvider = ({ children }) => {
  const overrides = {
    MuiTab: {
      root: {
        backgroundColor: "#4757c4",
      },
    },
  };
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides,
        palette: {
          type: "light",
          primary: {
            main: "#4757c4",
          },
          error: {
            main: "#f06292",
          },
        },
      }),
    []
  );

  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
