import React, { Component } from 'react'
import bookImg from '../image/book2.png'

export default class Singlebook extends Component {
    state = {
        book: this.props.location.state.book,
        singlebook: '',
        accessToken: '',
    }
    componentDidMount() {
        const tokenKey = localStorage.getItem('token')
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
            singlebook: data
        })
    }
    deleteBook = async () => {
        const { book, accessToken } = this.state;
        const payload = { bookId: book.id }


        const uri = `http://localhost:1337/api/delete-book`
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
    editBook = () => {
        const { singlebook } = this.state
        this.props.history.replace('/Editsinglebook', {
            book: singlebook
        })
    }
    render() {
        const { singlebook } = this.state;
        return (
            <div className="regdiv">

                <h1 className="titleline1">Book Details</h1>

                <div style={{ display: "flex", flex: 1 }}>
                    <img width="700" src={bookImg} alt=""/>
                    <ol className="listdetail">
                        <li><p>Book Name : {singlebook.bookName}</p>  </li>
                        <li><p>Author Name: {singlebook.authorName}</p></li>
                        <li><p>Published Year:{singlebook.publishedYear}</p></li>
                        <li><p>Language:{singlebook.language}</p></li>
                        <li><p>Keywords:{singlebook.keywords}</p></li>
                        <li><p>Price:{singlebook.price}</p></li>
                        <li><p>Total Pages:{singlebook.totalPages}</p></li>
                        <li><p>Edition:{singlebook.edition}</p></li>
                        <li><p>Publisher:{singlebook.publisher}</p></li>
                        <li><p>Description:{singlebook.description}</p></li>
                    </ol>
                </div>


                <div className="regbtnposition">
                    <button className="signin" onClick={() => this.editBook(singlebook)}>Edit</button>{'\n\n\n\n'}
                    <button className="signin" onClick={this.deleteBook}>Delete</button>{'\n\n\n\n'}
                    <button className="signin" onClick={() => this.props.history.replace('/Viewbooklist')}>View Book List</button>

                </div>
            </div>
        )
    }
}
