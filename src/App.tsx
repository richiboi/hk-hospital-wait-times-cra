import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { QueryClient, QueryClientProvider } from "react-query";
import MainScreen from "./MainScreen";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainScreen />
    </QueryClientProvider>
  );
}

export default App;
