import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const timeRef = useRef();
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  const startTimer = () => {
    if (isRunning) {
      return;
    }
    timeRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timeRef.current);
  };

  return (
    <div className="App">
      <h3>Timer</h3>
      {
        <div
          style={{
            border: "1px solid red",
            width: "200px",
            margin: "auto",
            backgroundColor: "aqua",
            marginBottom: "20px"
          }}
        >
          <p>Hours : {Math.floor(count / 3600)}</p>
          <p>Min : {Math.floor(count / 60) % 60}</p>
          <p>Sec : {count % 60}</p>
        </div>
      }
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
    </div>
  );
}
