import React, { FC, useEffect, useRef, useState } from "react"
import { Colors } from "../models/Colors"
import { Player } from "../models/Player"

interface TimerProps {
    currentPlayer: Player | null
    restart: () => void
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {

    const [blackTime, setBlackTime] = useState(150)
    const [whiteTime, setWhiteTime] = useState(150)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)


    if (blackTime < 0) {
        alert("Win white")
        setWhiteTime(150)
        setBlackTime(150)
        restart()
    } else if (whiteTime < 0) {
        alert("Win black")
        setWhiteTime(150)
        setBlackTime(150)
        restart()
    }  
         
    

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    }
    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1)
    }
    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1)
    }

    const handleRestart = () => {
        setWhiteTime(150)
        setBlackTime(150)
        restart()
    }

    return (
        <div>
            <div>
                <button onClick={handleRestart}>
                    Restart game
                </button>
            </div>
            <h2>Черние - {blackTime}</h2>
            <h2>Белие - {whiteTime}</h2>
        </div>
    )
}


export default Timer