import React, { Component } from 'react'
import registeravatar from '../image/register.png'

export default class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        address: '',
        password: '',
        confirmPassword: '',
        isError: '',

    }
    userDetail = async () => {
        const { firstName, lastName, email, mobileNumber, address, password, confirmPassword } = this.state;
        if (firstName !== "" && email !== "" && mobileNumber !== "" && address !== "" && password !== "" && confirmPassword !== "") {

            const payload = { firstName, lastName, email, mobileNumber, address, password, confirmPassword };
            //  API Call for Backend
            const uri = `http://localhost:1337/api/register`
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
            const data = await response.json();
            if (data?.success) {
                this.props.history.replace('/Login')
            }
            else {
                this.setState({ isError: "Register Failed" })
            }
        }
        else {
            this.setState({ isError: "Please Enter Detail" })
        }

    }
    onChangeFirst = (event) => {
        this.setState({ firstName: event.target.value, isError: '' });
    }
    onChangeLast = (event) => {
        this.setState({ lastName: event.target.value, isError: '' });
    }
    onChangeEmail = (event) => {
        this.setState({ email: event.target.value, isError: '' });
    }
    onChangeMobile = (event) => {
        this.setState({ mobileNumber: event.target.value, isError: '' });
    }
    onChangeAddress = (event) => {
        this.setState({ address: event.target.value, isError: '' });
    }
    onChangepassword = (event) => {
        this.setState({ password: event.target.value, isError: '' });
    }
    onChangeconfirmPassword = (event) => {
        this.setState({ confirmPassword: event.target.value, isError: '' });
    }

    render() {
        return (
            <div className="regdiv">
                <img width="510" height="250" style={{
                    borderRadius: "100px", marginLeft: "450px",
                }} src={registeravatar} alt="" /> <br></br><br></br>
                <div className="register">
                    First Name :
                    <input type="text" onChange={this.onChangeFirst} />
                    Last Name :
                    <input type="text" onChange={this.onChangeLast} />
                    Email:
                    <input type="email" onChange={this.onChangeEmail} />
                    Mobile Number:
                    <input type="text" onChange={this.onChangeMobile} />
                    Address:
                    <textarea style={{
                        borderRadius: "100px"
                    }} rows="4" cols="40" onChange={this.onChangeAddress} />
                    Password:
                    <input type="password" onChange={this.onChangepassword} />
                    Confirm Password:
                    <input type="password" onChange={this.onChangeconfirmPassword} />


                    <div className="regbtnposition"><br></br><br></br>
                        {this.state.isError.length > 0 &&
                            <p>{this.state.isError}</p>
                        }

                        <button className="signin" onClick={this.userDetail}>Register</button>

                    </div>

                </div>
            </div>
        )
    }
}
