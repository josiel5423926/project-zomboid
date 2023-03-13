import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "../src/page";

import { Nav } from "./components/Header";
import React from "react";
import WitheList from "./page/witheList";
import Register from "./page/register";
import GamePlay from "./page/gamePlay";
import BuyAccess from "./page/buyAccess";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/witheList" element={<WitheList/>} />
        <Route path="/register" element={<Register />} />
        <Route path="gameplay" element={<GamePlay />} />
        <Route path="buyAcces" element={<BuyAccess />} />
      </Routes>
 
    </ThemeProvider>
  );
}
