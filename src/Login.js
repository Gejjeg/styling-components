import React from "react";

export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false
    }

    onInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        })
    }

    onChecked = (event) => {
        const name = event.target.name;
        const checked = event.target.checked;
        this.setState({
            [name]: checked,
        })
    }

    // onLogin = (event) => {
    //     const click = event.target.type
    //     this.setState((onInputChange, onChecked) => {
    //         click = (onInputChange, onChecked)
    //         console.log(event)
    //     })
    // }

    reset = () => {
        this.setState({
            username: "",
            password: "",
            remember: false
        })
    }

    render() {
        return (
            <div>
                <input name="username" value={this.state.username} onChange={this.onInputChange} />
                <input name="password" type="password" value={this.state.password} onChange={this.onInputChange} />
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.onChecked}/>
                <button style={{backgroundColor: this.state.password.length < 8 ? "red" : "green"}} onClick={this.onLogin} disabled={this.state.username !== "" && this.state.password !== "" ? false : true}>Login</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}