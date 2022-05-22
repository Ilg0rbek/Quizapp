import { useRef } from 'react'
import './Start.css'

const Start = ({ setUserName }) => {

    const inputRef = useRef()

    const handleClick = (e) => {
        inputRef.current.value && setUserName(inputRef.current.value)
    }

    return (
        <div className="start">
            <input
                type="text"
                placeholder='Enter your name'
                className='startInput'
                ref={inputRef}
            />
            <button onClick={handleClick} className="startButton">
                Start
            </button>
        </div>
    )
}

export default Start
