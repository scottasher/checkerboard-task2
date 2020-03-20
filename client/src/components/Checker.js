import React from 'react';

export default (props) => {
    console.log(props)
    const allStyles = {...props.checkerStyle, ...props.color, ...props.active}
    return (
        <div 
            id={props.id} 
            onClick={props.onClick} 
            style={allStyles} 
            value='value' 
            className="checker"
        />
    )
}