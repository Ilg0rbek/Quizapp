import React, { useEffect, useState } from 'react'
import './Timer.css'

const Timer = ({ setStop, questionNumber }) => {

    const [timer, setTimer] = useState(60)

    useEffect(() => {
        const interval = setInterval(() => {

            if (timer === 0) return setStop(true)
            setTimer(prev => prev - 1)

        }, 1000)
        
        return () => clearInterval(interval)

    }, [setStop, timer])

    useEffect(() => {
        setTimer(60)
    }, [questionNumber])

    return (
        <div>
            {timer}
        </div>
    )
}

export default Timer
