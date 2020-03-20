import React from 'react';

export default (props) => {
    const styles = {...props.styles, ...props.color}
    return (
        <div style={styles} className="square col">
            {props.children}
        </div>
    )
}