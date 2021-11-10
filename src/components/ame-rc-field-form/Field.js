import React, { Component } from "react";

export default class Field extends Component{
    getControlled = () => {
        return{
            value: "coboy",
            onChange: (e) => {
                const newValue = e.target.value
                console.log('new', newValue)
            }
        }
    }
    render() {
        const returnChildNode = React.cloneElement(this.props.children, this.getControlled())
        return returnChildNode
    }
}