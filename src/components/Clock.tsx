import { useState, useEffect } from "react";
import { TimeZones } from "../types";

const Clock = ({ timeZone }: { timeZone: TimeZones }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString(undefined, {
    timeZone,
    hour12: false,
  });

  return <h1 style={{ margin: 0, textAlign: "center" }}>{formattedTime}</h1>;
};

export default Clock;
