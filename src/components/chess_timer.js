import React from "react";
import MyTimer from './my_timer';

export default class ChessTimer extends React.Component {

    timer1 = false;
    constructor(props) {
        super(props);
    }
    handleClick() {
        console.log('Click happened');
        alert('Hello');
    }
    render() {
        return <>
            <MyTimer  />
            <MyTimer  />
        </>
    }
}