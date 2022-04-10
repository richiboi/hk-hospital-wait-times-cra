import React, { useEffect, useState } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import MainScreen from "./MainScreen";
import { LangaugeContextProvider } from "./utils/useLanguageContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LangaugeContextProvider>
        <MainScreen />
      </LangaugeContextProvider>
    </QueryClientProvider>
  );
}

export default App;
