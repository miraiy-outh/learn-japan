import { ThemeProvider } from "@mui/material";
import { RootPage } from "./pages/root-page";
import theme from "./theme/theme";
import { Provider } from "react-redux";
import { store } from "./services/store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RootPage />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
