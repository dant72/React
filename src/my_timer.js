import React from "react";

export default class MyTimer extends React.Component {

    static currentTimer;

    constructor(props) {
        super(props);
        this.seconds = props.seconds ? props.seconds : 0;
        this.minutes = props.minutes ? props.minutes : 0;
        this.hours = props.hours ? props.hours : 0;

        this.stop = this.stop.bind(this);

        if (this.seconds === 0 && this.minutes === 0 && this.hours === 0)
            this.minutes = 5;

        this.dt = new Date(this.hours * 1000 * 60 * 60 + this.minutes * 1000 * 60 +  this.seconds * 1000);
        this.state = {
            date: this.dt
        };
        setInterval(this.updateTime, 1000);
    }

    updateTime = () => {
        this.setState({
            date: this.dt > 0 && MyTimer.currentTimer === this ? this.dt.setTime(this.dt.getTime() - 1000) : this.dt
        });
    }

    print(date) {
        //let milliseconds = date % 1000;
        let seconds = date / 1000 % 60;
        let minutes = Math.floor(date / 1000 / 60) % 60;
        let hours = Math.floor(date / 1000 / 60 / 60) % 24;

        return `${this.zf(hours, 2)}:${this.zf(minutes, 2)}:${this.zf(seconds, 2)}`;
    }

    //zero format
    zf(num, len) {
        let str = num.toString();
        while (str.length < len)
            str = `0${str}`;
        return str;
    }

    stop() {
        MyTimer.currentTimer = this;
    }

    render() {
        return <><p>{this.print(this.state.date)}</p><button onClick={this.stop}> {this.dt > 0 && MyTimer.currentTimer === this ? 'Stop' : 'Start'}</button></>;
    }
}