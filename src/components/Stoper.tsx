import React, {useState, useEffect} from 'react'
import '../components/componentsstoper/Stoper.scss'
import calculateTimer from '../components/componentsstoper/Timer';
import Controls from '../components/componentsstoper/Controls';

function Main() {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timerArray, setTimerArray] = useState<Array<number|string>>([]);

    useEffect(() => {
        let timeArray: Array<number|string> = calculateTimer(timeInSeconds);
        setTimerArray(timeArray);
    }, [timeInSeconds]);

    // komentarz


    return (
    <main className='body'>
        <div className='time-container'>
            <p className='timer-text'>{timerArray[0]}</p>
            <span>:</span>
            <p className='timer-text'>{timerArray[1]}</p>
            <span>:</span>
            <p className='timer-text'>{timerArray[2]}</p>
        </div>
        <Controls setTimeInSeconds={setTimeInSeconds}/>
    </main>
        
        
    )
}

export default Main