import React from "react";
import "./random_numb.css";

export default class RandomNumb extends React.Component {

    constructor(props) {
        super(props);
        this.min = props.min ? props.min : 0;
        this.max = props.max ? props.max : 5;
        this.state = 
            {
                rand: 0
            };

    }

    getRandomNumb() {
        return Math.random() * (this.max - this.min) + this.min;
    }

    clickHandler = () => {
        this.setState({
            rand: Math.floor(this.getRandomNumb())
        });
    }

    render() {
        return <button onClick={this.clickHandler}>{this.state.rand}</button>
    }
}