import { ThemeProvider } from "@mui/material";
import { RootPage } from "./pages/root-page";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootPage />
    </ThemeProvider>
  );
}

export default App;
