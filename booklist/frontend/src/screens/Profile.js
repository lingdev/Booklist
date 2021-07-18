import React, { Component } from 'react'

export default class Profile extends Component {
    state = {
        profileData: '',
    }
    componentDidMount() {
        this.profileDetail();
    }
    profileDetail = async () => {
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
        this.setState({ profileData: data })
    }
    render() {
        const { profileData } = this.state;
        return (
            <div className="regdiv">
                <h1 className="profileid">Profile Details</h1>

                <div className="register">

                    <table className="detailtb">
                        <tr>
                            First Name:<th>
                                {profileData.firstName}
                            </th>
                        </tr>
                        <tr>
                            Last Name:<th>
                                {profileData.lastName}
                            </th>
                        </tr>
                        <tr>
                            Email:<th>
                                {profileData.email}
                            </th>
                        </tr>
                        <tr>
                            Mobile Number :
                            <th>
                                {profileData.mobileNumber}
                            </th>
                        </tr>
                        <tr>
                            Address:
                            <th>
                                {profileData.address}
                            </th>
                        </tr>
                    </table>
                    <br></br>  <br></br>
                    <div className="regbtnposition">
                        <button className="signin" onClick={() => this.props.history.replace('/Editprofile')}>Edit Profile</button><br></br><br></br>
                        <button className="signin" onClick={() => this.props.history.replace('/Viewbooklist')}>View Book List</button>
                    </div>
                </div>
            </div>
        )
    }
}
