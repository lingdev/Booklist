import React, { Component } from 'react'

export default class EditProfile extends Component {
    state = {
        profileData: '',
        accessToken: '',
        firstName: '',
    }
    componentDidMount() {
        this.ProfileDetail()
        var tokenKey = localStorage.getItem('token')
        this.setState({ accessToken: tokenKey })
    }
    ProfileDetail = async () => {
        const tokenKey = localStorage.getItem('token')
        const uri = `http://localhost:1337/api/profile`
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenKey}`,
        };

        let options = {
            method: 'GET',
            headers,
        };
        const response = await fetch(uri, options);
        const data = await response.json();
        this.setState({
            profileData: data,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            mobileNumber: data.mobileNumber,
            address: data.address,
        })

    }
    edit = async () => {
        const { firstName, lastName, email, mobileNumber, address, accessToken } = this.state;
        const payload = { firstName, lastName, email, mobileNumber, address };

        //  API Call for Backend
        const uri = `http://localhost:1337/api/edit-profile`
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,

        };
        let options = {
            method: 'POST',
            headers,
            body: JSON.stringify(payload),
        };

        const response = await fetch(uri, options);
        const data = await response.json();
        if (data?.success) {
            this.props.history.replace('/Profile')
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


    render() {

        const { profileData, firstName } = this.state;

        return (
            <div className="regdiv">
                <h1 className="profiletitle">Edit Profile Details</h1>
                <div className="editprofile">
                    <table className="detailtedit">

                        <tr>
                            First Name:<th>
                                <input type="text" defaultValue={firstName} onChange={this.onChangeFirst} />
                            </th>
                        </tr>
                        <tr>
                            Last Name:
                            <th>
                                <input type="text" defaultValue={profileData.lastName} onChange={this.onChangeLast} />
                            </th>
                        </tr>
                        <tr>
                            Email:<th>
                                <input type="text" defaultValue={profileData.email} onChange={this.onChangeEmail} />
                            </th>
                        </tr>
                        <tr>
                            Mobile Number: <th>
                                <input type="text" defaultValue={profileData.mobileNumber} onChange={this.onChangeMobile} />
                            </th>
                        </tr>
                        <tr>
                            Address:<th>
                                <input type="text" defaultValue={profileData.address} onChange={this.onChangeAddress} />
                            </th>
                        </tr>
                    </table>
                    <br></br><br></br>

                    <div className="regbtnposition">

                        <button className="signin" onClick={this.edit} >Update Profile</button><br></br><br></br>

                    </div>
                    <div>

                    </div>
                </div>
            </div>

        )
    }
}
