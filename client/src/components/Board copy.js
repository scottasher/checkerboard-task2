import React, { useState } from 'react';
import Square from './Square';
import Checker from './Checker';
const style = {
    black: { backgroundColor: 'black' },
    checker: {
        red: { backgroundColor: 'red' },
        black: { backgroundColor: 'black' }
    }
    
}

export default (props) => {
    const [active, setActive] = useState(false);
    const styles = {...props.styles, ...props.color};

    function handleClick(e) {
        console.log(e)
    };
    
    function renderCheckerboard(data) {
        return data.map(obj => {
            return (
                <row className="row" key={obj.id}>
                    {!obj.children ? null : (
                        obj.children.map(ob => {
                            <Square key={ob.id} styles={props.style} color={ob.color === 'black' ? style.black : null}>
                                {!ob.children ? null : (
                                    ob.children.map(o => {
                                        <Checker 
                                            id={o.id} 
                                            active={o.active} 
                                            onClick={handleClick} 
                                            checkerStyle={props.checkerStyle} 
                                            color={o.color === 'red' ? style.checker.red : style.checker.black } 
                                        />
                                    })
                                )}
                            </Square>
                        })
                    )}
                </row>
            )
        })
    }

    return (
        <div>
            <div className="row"> 
                <Square styles={props.style} color={style.black}>
                    <Checker id="1" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="2" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="3" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="4" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="5" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="6" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="7" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="8" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
            </div>
            
            <div className="row"> 
                <Square styles={props.style} >
                    <Checker id="9" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="10" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="11" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="12" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="13" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="14" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="15" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="16" active={true} onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
            </div>
            
            <div className="row"> 
                <Square styles={props.style} color={style.black}>
                    <Checker id="17" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="18" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="19" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="20" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="21" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="22" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="23" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="24" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
            </div>
            
            <div className="row"> 
                <Square styles={props.style} >
                    <Checker id="25" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="26" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="27" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="28" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="29" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="30" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="31" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="32" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
            </div>
            
            <div className="row"> 
                <Square styles={props.style} color={style.black}>
                    <Checker id="33" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="34" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="35" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="36" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="37" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="38" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="39" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="40" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
            </div>
            
            <div className="row"> 
                <Square styles={props.style} >
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
            </div>
            
            <div className="row"> 
                <Square styles={props.style} color={style.black}>
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
            </div>
            
            <div className="row"> 
                <Square styles={props.style} >
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} >
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
                <Square styles={props.style} color={style.black}>
                    <Checker id="" onClick={handleClick} checkerStyle={props.checkerStyle} color={style.checker} />
                </Square>
            </div>
        </div>
    )
}