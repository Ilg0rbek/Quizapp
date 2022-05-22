import React, { useState, useEffect } from 'react'
import './Trivia.css'
import useSound from 'use-sound'
import play from '../../assets/play.mp3'
import correct from '../../assets/correct.mp3'
import wrong from '../../assets/wrong.mp3'


const Trivia = ({ data, setStop, questionNumber, setQuestionNumber }) => {

    const [question, setQuestion] = useState(null)
    const [selectAnswer, setSelectAnswer] = useState(null)
    const [className, setClassName] = useState('answer')
    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    useEffect(() => {
        letsPlay();
    }, [letsPlay])

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])

    const delay = (duration, colback) => {
        setTimeout(() => {
            colback()
        }, duration)
    }

    const handleClick = (v) => {
        setSelectAnswer(v)
        setClassName("answer active")
        delay(1000, () => {
            setClassName(v.correct ? "answer correct" : "answer wrong")
        })
        delay(3000, () => {
            if (v.correct) {
                correctAnswer()
                delay(1000, () => {
                    setQuestionNumber(prev => prev + 1)
                    setSelectAnswer(null)
                })
            } else {
                wrongAnswer()
                delay(1000, () => {
                    setStop(true)
                })
            }

        })
    }

    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {
                    question?.answers.map((v, idx) => (
                        <div
                            className={selectAnswer === v ? className : 'answer'}
                            onClick={() => handleClick(v)} key={idx + 1}
                        >
                            {v.text}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Trivia
