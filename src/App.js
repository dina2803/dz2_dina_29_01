import React, { Component } from "react";

class Switcher extends Component {
    constructor() {
        super()
        this.state = {
            color1: "darkred",
            color2: "darkblue",
        }
    }

    swapColors = () => {
        const { color1, color2 } = this.state;
        this.setState({
            color1: color2,
            color2: color1,
        })
    }

    render() {
        const { color1, color2 } = this.state
        return (
            <div>
                <div
                    style={{ width: "250px", height: "250px", backgroundColor: color1, display: "inline-block"}}
                    onClick={this.swapColors}
                ></div>
                <div
                    style={{ width: "250px", height: "250px", backgroundColor: color2, display: "inline-block"}}
                    onClick={this.swapColors}
                ></div>
            </div>
        )
    }
}

export default Switcher;