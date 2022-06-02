import React from "react";
import "./random_numb.css";

export default class Quotes extends React.Component {

    quotes = [
        { quote: "There are no shortcuts to any place worth going", author: "Helen Keller" },
        { quote: "You miss 100% of the shots you don't take", author: "Wayne Gretzky" },
    ]
    constructor(props) {
        super(props);
        this.show = false;
        this.index = 0;
        this.show = true;

        this.state = {
            author: this.quotes[this.index].author,
            quote: this.quotes[this.index].quote
        }
    }

    clickShowHandler = () => {
        this.index = (this.index + 1) % this.quotes.length;
        this.setState(
            {
                author: this.quotes[this.index].author,
                quote: this.quotes[this.index].quote
            });
    }

    clickHideHandler = () => {
        this.show = !this.show;
        this.setState(
            {
                author: this.show ? this.quotes[this.index].author : "",
                quote: this.show ? this.quotes[this.index].quote : ""
            });
    }

    render() {
        return <><b>{this.state.quote} <br />{this.state.author}</b><br /><button onClick={this.clickShowHandler}>Show</button><br /><button onClick={this.clickHideHandler}>Hide</button></>
    }
}