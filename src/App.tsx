import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { WaitTime } from "./types";
import axios from "axios";
import Card from "./components/Card";

const API_ENDPOINT = "https://www.ha.org.hk/opendata/aed/aedwtdata-en.json";
interface APIResponse {
  waitTime: Array<{ hospName: string; topWait: string }>;
  updateTime: string;
}

function App() {
  const [waitTimes, setWaitTimes] = useState<WaitTime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get<APIResponse>(`${API_ENDPOINT}`, {});

      // Shape the data properly
      setWaitTimes(
        res.data.waitTime.map((waitTime) => {
          const [timeModifier, hoursStr] = waitTime.topWait.split(" ");
          return {
            name: waitTime.hospName,
            time: [timeModifier, parseInt(hoursStr)],
          };
        })
      );
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Hospital wait times</h1>
      {waitTimes.map((waitTime) => (
        <Card waitTime={waitTime} />
      ))}
    </div>
  );
}

export default App;
