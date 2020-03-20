import React, { Component } from 'react';

export default (props) => {
    return (
        <form>
            <label for="number">Enter a number:</label>
            <input 
                onChange={props.handleChange}
                min="5" 
                max="20" 
                type="number" 
                values={props.value} 
                name="number"
            />
        </form>
    )
}