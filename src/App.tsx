import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Layout from "./pages/Inbox/components/Layout";
import Foreground from "./pages/Inbox/components/Foreground";
import SideBar from "./pages/Inbox/components/SideBar";
import Chat from "./pages/Inbox/components/Chat";
import theme from "./theme/index";

import AppRoutes from "./Routing";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  );
}
