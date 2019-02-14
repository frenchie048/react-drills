import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUsernameChange(un) {
        this.setState({
            username: un
        })
    }

    handlePasswordChange(pw) {
        this.setState({
            password: pw
        })
    }

    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                Username:<input
                    onChange={(e) => this.handleUsernameChange(e.target.value)}>
                </input>
                Password:<input
                    onChange={(e) => this.handlePasswordChange(e.target.value)}>
                </input>
                <button onClick={this.handleLogin}
                >Login</button>
            </div>
        )
    }
}

export default Login;