import React, { useEffect, useState } from "react";
import "./App.css";
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
