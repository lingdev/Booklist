import React, { Component } from 'react'
import loginavatar from '../image/login.png'

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        isError: '',

    }
    loginDetail = async () => {
        const { email, password } = this.state;
        if (email !== "" && password !== "") {

            const payload = { email, password };
            const uri = `http://localhost:1337/api/login`
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };

            let options = {
                method: 'POST',
                headers,
                body: JSON.stringify(payload),
            };

            const response = await fetch(uri, options);
            const status = response.status;
            const data = await response.json();
            if (status === 200) {
                this.logedin(data)
            }

        }
        else {

            this.setState({ isError: "Please Enter Detail" })
        }


    }
    logedin = (data) => {

        if (data?.error) {
            this.setState({ isError: data.error })
        } else if (data.id !== "") {
            localStorage.setItem('token', data.token)
            this.props.history.replace('/Viewbooklist')
        } else {
            this.setState({ isError: "Network issue" })
        }

    }
    onChangeEmail = (event) => {
        this.setState({ email: event.target.value, isError: '' });
    }
    onChangepassword = (event) => {
        this.setState({ password: event.target.value, isError: '' });
    }

    render() {

        return (

            <div className="regdiv">

                <div className="register">

                    <img width="310" height="250" style={{
                        borderRadius: "100px"}} src={loginavatar} alt=""/><br></br><br></br><br></br>
                    Email:
                    <input type="email" onChange={this.onChangeEmail} />
                    Password:
                    <input type="password" onChange={this.onChangepassword} />
                    <div className="signinbtn">
                        {this.state.isError.length > 0 &&
                            <p>{this.state.isError}</p>
                        }

                        <button className="signin" onClick={this.loginDetail}>Sign in</button>

                    </div>
                    <div className="regbtnposition">
                        <button className="newregbtn" onClick={() => this.props.history.replace('/Register')}>
                            New User Register
                        </button>
                    </div>

                </div>

            </div>
        )
    }
}
