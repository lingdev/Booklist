import React, { Component } from 'react'

export default class Editsinglebook extends Component {
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
        book: this.props.location.state.book,
        bookDetail: '',
        singlebook: '',
        accessToken: '',

    }
    componentDidMount() {
        var tokenKey = localStorage.getItem('token')
        this.setState({ accessToken: tokenKey },
            () => {
                this.getBook();
            }
        )

    }
    getBook = async () => {
        const { book, accessToken } = this.state;
        const payload = { bookId: book.id }

        const uri = `http://localhost:1337/api/get-book`
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
        this.setState({
            singlebook: data,
            bookName: data.bookName,
            authorName: data.authorName,
            publishedYear: data.publishedYear,
            language: data.language,
            keywords: data.keywords,
            price: data.price,
            totalPages: data.totalPages,
            edition: data.edition,
            publisher: data.publisher,
            description: data.description,

        })
    }
    bookDetail = async () => {
        const { accessToken, singlebook, bookName, authorName, publishedYear, language, keywords, price,
            totalPages, edition, publisher, description } = this.state;

        const payload = {
            bookId: singlebook.id, bookName, authorName, publishedYear, language,
            keywords, price, totalPages, edition, publisher, description
        };

        //  API Call for Backend
        const uri = `http://localhost:1337/api/edit-book`
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
        const { singlebook} = this.state;
        return (
            <div className="regdiv">
                <h1 className="singlebooktitle">Edit Profile Details</h1>

                <div className="register">

                    Book Name :
                    <input type="text" defaultValue={singlebook.bookName} onChange={this.onChangebookName} />
                    Author Name :
                    <input type="text" defaultValue={singlebook.authorName} onChange={this.onChangeauthorName} />
                    Published Year
                    <input type="email" defaultValue={singlebook.publishedYear} onChange={this.onChangepublishedYear} />
                    Language :
                    <input type="text" defaultValue={singlebook.language} onChange={this.onChangelanguage} />
                    Keywords:
                    <input type="text" defaultValue={singlebook.keywords} onChange={this.onChangekeywords} />
                    Price  :
                    <input type="text" defaultValue={singlebook.price} onChange={this.onChangeprice} />
                    Total Pages:
                    <input type="text" defaultValue={singlebook.totalPages} onChange={this.onChangetotalPages} />
                    Edition:
                    <input type="text" defaultValue={singlebook.edition} onChange={this.onChangeedition} />
                    Publisher :
                    <input type="text" defaultValue={singlebook.publisher} onChange={this.onChangepublisher} />
                    Description:
                    <textarea style={{
                        borderRadius: "30px"
                    }} cols="40" rows="7"
                        defaultValue={singlebook.description} onChange={this.onChangedescription} />
                    <div className="signinbtn">
                        {this.state.isError.length > 0 &&
                            <p>{this.state.isError}</p>
                        }
                        <button className="signin" onClick={this.bookDetail}>Update book</button>
                    </div>
                </div>
            </div>
        )
    }
}
