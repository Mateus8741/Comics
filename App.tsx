import React from "react";

import { ThemeProvider } from "styled-components/native";
import theme from "@/global/styles/theme";

import { Routes } from "@/Routes/routes";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </ThemeProvider>
  );
}
