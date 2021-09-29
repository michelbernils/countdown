import './App.css';
import React, {useState, useEffect} from 'react';

import Clock from './components/Clock'

function App() {
  const [timerDays, setTimerDays] = useState(0)
  const [timerHours, setTimerHours] = useState(0)
  const [timerMinutes, setTimerMinutes] = useState(0) 

  let interval;

  useEffect( () => {
    startTimer();
  });

  const startTimer = () => {

    const countDownDate = new Date("Sep 21, 2021").getTime();
    interval = setInterval( () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance/(24*60*60*1000));
      const hours = Math.floor(distance % (24*60*60*1000)/(1000*60*60));
      const min = Math.floor(distance % (60*60*1000)/(1000*60));

      if (distance < 0){
        clearInterval(interval.current);
      }else{
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(min)
      }

    }); 
  }
  
  return (
    <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} />
  );
}

export default App;
