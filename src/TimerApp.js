import React, { useState, useEffect } from 'react';
import { addSeconds, set, startOfDay } from 'date-fns';

function TimerApp() {
  const [currentTime, setCurrentTime] = useState(
    set(startOfDay(new Date()), { minutes: 0, seconds: 0 })
  );
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(updateTime, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  useEffect(() => {
    let notificationInterval;

    if (currentTime.getSeconds() === 25) {
      notificationInterval = setTimeout(() => {
        window.alert('Alerta a cada 25 segundos!');
      }, 1000); // Atraso de 1 segundo após os 25 segundos
    }

    return () => {
      clearTimeout(notificationInterval);
    };
  }, [currentTime]);

  const start = () => {
    setRunning(true);
  };

  const pause = () => {
    setRunning(false);
  };

  const stop = () => {
    pause();
    setCurrentTime(set(startOfDay(new Date()), { minutes: 0, seconds: 0 }));
  };

  const updateTime = () => {
    setCurrentTime((prevTime) => addSeconds(prevTime, 1));
  };
  
  const addSecond = () => {
    setTimeout(() => {
    setCurrentTime((prevTime) => addSeconds(prevTime, 1));
    }, 3000); // Delay de 3000ms (3 segundos)
  };

  const saoPauloTimeZoneOffset = -3; 
  const saoPauloTime = new Date(currentTime.getTime() + saoPauloTimeZoneOffset * 60 * 60 * 1000);
  const formattedTime = saoPauloTime.toISOString().substr(11, 8);
  
  return (
    <div>
      <div id="watch" className="watch-display">
        {formattedTime}
      </div>
      <button className="action-button" onClick={start}>Iniciar</button>
      <button className="action-button" onClick={addSecond}>Add Segundo</button>
      <button className="action-button" onClick={pause}>Pausar</button>
      <button className="action-button" onClick={stop}>Parar</button>
    
      <style jsx>{`
        body {
          background-color: #121212;
          color: white;
          font-family: Arial, sans-serif;
          margin: 10; 
          padding: 10;
        }
        .watch-display {
         font-size: 5rem;
         margin: 9rem;
         margin-bottom: 5px;
        }

        .action-button {
          font-size: 1rem;
          background-color: #000066;
          color: white;
          border: 1rem;
          padding: 10px 20px;
          margin: 30px;
          cursor: pointer;
          border-radius: 30px;
        }

        .action-button:hover {
          background-color: #000066;
        }
      `}</style>
    </div>
  );
}

export default TimerApp;