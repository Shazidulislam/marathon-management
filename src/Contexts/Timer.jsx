
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


const Timer = ({ startRegistion, endRegistion }) => {
  if (!startRegistion || !endRegistion) {
    return <p className="text-white p-4 ">Dates not provided</p>;
  }

  const startDate = startRegistion.toString();
  const endDate = endRegistion.toString();

  const start = new Date(startDate);
  const end = new Date(endDate);
  const now = new Date();

  const duration = Math.floor((end - start) / 1000);
  const initialRemainingTime = Math.floor((end - now) / 1000);

  if (initialRemainingTime <= 0) {
    
    return (
      <p className="text-white rounded-full text-center p-4 border-2 border-[#ffffff90] font-medium">
        Registration Closed
      </p>
    );
  }

  return (
    <div className="">
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        initialRemainingTime={initialRemainingTime}
        strokeWidth={5}
        colors={[
          ['#004777', 0.3],
          ['#F7B801', 0.3],
          ['#A30000', 0.2],
          ['#A30000', 0.2],
        ]}
        size={120}
      >
        {({ remainingTime }) => {
          const days = Math.floor(remainingTime / 86400);
          const hours = Math.floor((remainingTime % 86400) / 3600);
          const minutes = Math.floor((remainingTime % 3600) / 60);
          const seconds = remainingTime % 60;

          return (
            <div className="text-center text-sm font-bold">
              <p>
                {days}d {hours}h
              </p>
              <p>
                {minutes}m {seconds}s
              </p>
            </div>
          );
        }}
      </CountdownCircleTimer>
    </div>
  );
};


export default Timer;



