import React, { Component } from 'react'


export default class Createbook extends Component {
    state = {
        bookName: '',
        authorName: '',
        publishedYear: '',
        language: '',
        keywords: '',
        price: '',
        totalPages: '',
        edition: '',
        publisher: '',
        description: '',
        isError: '',
        accessToken: '',

    }
    componentDidMount() {
        var tokenKey = localStorage.getItem('token')
        this.setState({ accessToken: tokenKey })
    }
    bookDetail = async () => {
        const { accessToken, bookName, authorName, publishedYear, language, keywords, price,
            totalPages, edition, publisher, description } = this.state;
        if (bookName !== "" && authorName !== "" && publishedYear !== "" && totalPages
            !== "" && keywords !== "" && price !== "") {

            const payload = {
                bookName, authorName, publishedYear, language,
                keywords, price, totalPages, edition, publisher, description
            };
            //  API Call for Backend
            const uri = `http://localhost:1337/api/create-book`
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
                this.props.history.replace('/Viewbooklist')
            }
        }
    }

    onChangebookName = (event) => {
        this.setState({ bookName: event.target.value, isError: '' });
    }
    onChangeauthorName = (event) => {
        this.setState({ authorName: event.target.value, isError: '' });
    }
    onChangepublishedYear = (event) => {
        this.setState({ publishedYear: event.target.value, isError: '' });
    }
    onChangelanguage = (event) => {
        this.setState({ language: event.target.value, isError: '' });
    }
    onChangekeywords = (event) => {
        this.setState({ keywords: event.target.value, isError: '' });
    }
    onChangeprice = (event) => {
        this.setState({ price: event.target.value, isError: '' });
    }
    onChangetotalPages = (event) => {
        this.setState({ totalPages: event.target.value, isError: '' });
    }
    onChangeedition = (event) => {
        this.setState({ edition: event.target.value, isError: '' });
    }
    onChangepublisher = (event) => {
        this.setState({ publisher: event.target.value, isError: '' });
    }
    onChangedescription = (event) => {
        this.setState({ description: event.target.value, isError: '' });
    }
    render() {
        const { accessToken } = this.state;
        return (

            <div className="regdiv">
                <h1 className="createtitle">Enter Book Details</h1>
                {accessToken !== null ?

                    <div className="register">
                        Book Name :
                        <input type="text" onChange={this.onChangebookName} />
                        Author Name :
                        <input type="text" onChange={this.onChangeauthorName} />
                        Published Year
                        <input type="email" onChange={this.onChangepublishedYear} />
                        Language :
                        <input type="text" onChange={this.onChangelanguage} />
                        Keywords:
                        <input type="text" onChange={this.onChangekeywords} />
                        Price  :
                        <input type="text" onChange={this.onChangeprice} />
                        Total Pages:
                        <input type="text" onChange={this.onChangetotalPages} />
                        Edition:
                        <input type="text" onChange={this.onChangeedition} />
                        Publisher :
                        <input type="text" onChange={this.onChangepublisher} />
                        Description:
                        <textarea style={{
                            borderRadius: "100px"
                        }} rows="4" cols="40"  onChange={this.onChangedescription} />

                        <div className="signinbtn">
                            {this.state.isError.length > 0 &&
                                <p>{this.state.isError}</p>
                            }
                            <button className="signin" onClick={this.bookDetail}>Create book</button><br></br><br></br>
                            <button className="signin" onClick={() => this.props.history.replace('/Viewbooklist')}>View Book List</button>

                        </div>
                    </div>
                    :
                    <div>
                        <p>Please Login To Continue</p>
                        <button onClick={() => this.props.history.replace('/Login')}>Login</button>

                    </div>
                }
            </div>
        )
    }
}
