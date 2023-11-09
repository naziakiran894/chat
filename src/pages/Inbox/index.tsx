import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Layout from "./components/Layout";
import Foreground from "./components/Foreground";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";

export default function App() {
  return (
    <Layout>
      <Foreground>
        <SideBar />
        <Chat />
      </Foreground>
    </Layout>
  );
}
