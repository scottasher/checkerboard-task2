import React, { useState } from 'react';
import Square from './Square';
import Checker from './Checker';
import checkerData from './checkerboardMap';

const style = {
    square: { backgroundColor: '#b53810' },
    checker: {
        red: { backgroundColor: 'red' },
        black: { backgroundColor: 'black' }
    }
}

export default (props) => {
    const [active, setActive] = useState(null);
    const styles = {...props.styles, ...props.color};

    function handleClick(e) {
        const id = e.target.id;
        if(active === e) {
            setActive(null)
        } else {
            setActive(id)
        }
    };
    
    function activeColor(position) {
        if (active == position) {
            console.log('hit')
            return { border: '3px solid yellow' };
        }
        return "";
    };
    
    function renderCheckerboard(data) {
        return data.map(obj => {
            return (
                <row className="row" key={obj.id}>
                    {!obj.children ? null : (
                        obj.children.map(ob => {
                            return (
                                <Square 
                                    key={ob.id} 
                                    styles={props.style} 
                                    color={ob.color === '#b53810' ? style.square : null}
                                >
                                    {!ob.children ? null : (
                                        ob.children.map(o => {
                                            return (
                                                <Checker 
                                                    id={o.id} 
                                                    active={activeColor(o.id)} 
                                                    onClick={handleClick} 
                                                    checkerStyle={props.checkerStyle} 
                                                    color={style.checker[o.color] || null} 
                                                />
                                            )
                                        })
                                    )}
                                </Square>
                            )
                        })
                    )}
                </row>
            )
        })
    }

    return (
        <div>
            {renderCheckerboard(checkerData)}
        </div>
    )
}