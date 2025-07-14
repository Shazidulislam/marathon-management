import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = () => {
    return (
        <div className=''>
            <CountdownCircleTimer
              isPlaying
              duration={100000  }
               colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    );
};

export default Timer;