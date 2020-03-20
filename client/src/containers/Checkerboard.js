import React, {useState} from 'react';
import Board from '../components/Board';

export default () => {
    const [inputState, setInputState] = useState(5)

    function handleChange(e) {
        setInputState(e.target.value)
    }

    const style = { flex: 'none', width: `${inputState.toString()}em`, height: `${inputState.toString()}em` }
    const boardStyle = { width: `${(inputState * 6).toString()}em`, height: `${(inputState * 6).toString()}em` }
    const checkerStyle = { top: `19%`, left: `19%`, borderRadius: '100%' }
    
    return (
        <div className="container">
            <div>
                <label htmlFor="number">Enter a number:</label>
                <input 
                    onChange={handleChange}
                    min="5" 
                    max="20" 
                    type="number" 
                    values={inputState} 
                    name="number"
                />
            </div>
            <Board style={style} checkerStyle={checkerStyle} boardStyle={boardStyle} />
        </div>
    )
}