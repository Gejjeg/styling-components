import React from "react"

export class Welcome extends React.Component {
    render() {
        return <h1 className="welcome">Hello, {this.props.name}</h1>
    }
}