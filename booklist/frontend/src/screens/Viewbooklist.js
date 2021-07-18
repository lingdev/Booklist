import React, { Component } from 'react'
import booklist from '../image/book2.png'

export default class Viewbooklist extends Component {
    state = {
        books: [],
        accessToken: '',

    }
    componentDidMount() {
        this.showBooks();
        const tokenKey = localStorage.getItem('token')
        this.setState({ accessToken: tokenKey })

    }
    showBooks = async () => {
        const tokenKey = localStorage.getItem('token')

        const uri = `http://localhost:1337/api/show-books`
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
        this.setState({ books: data })
    }
    singleBook = (item) => {
        this.props.history.replace('/singleBook', {
            book: item
        })
    }
    render() {
        const { books, accessToken } = this.state;
        return (
            <div className="regdiv">
                <div className="titletop">
                    <h1 className="titleline">Book List</h1>
                    <button className="signin" onClick={
                        () => this.props.history.replace('/Profile')}> Profile </button>
                    {'\n\n\n\n'}
                    <button className="signin" onClick={
                        () => this.props.history.replace('/Createbook')}> Create Book </button>
                </div>

                <div className="viewbook">

                    <div>
                        {accessToken !== null ?
                            <div>

                                {books.length > 0 ?

                                    <div className="parent" >

                                        {
                                            books.map((book, i) =>
                                                <div key={i} onClick={() => this.singleBook(book)}>
                                                    <div className="box">
                                                        {/* // eslint-disable-next-line  */}
                                                        <img width="100" src={booklist} alt=""/>

                                                        <p className="bookviewname">{book.bookName}{'\n\n\n'}-{'\n\n\n'}{book.publishedYear}  <br></br>
                                                            {book.authorName}<br></br>
                                                            Edition: {book.edition}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                    : <button onClick={
                                        () => this.props.history.replace('/Createbook')}> Create book </button>
                                }
                            </div>
                            :
                            <div>
                                <p>Please Login To Continue</p>
                                <button onClick={() => this.props.history.replace('/Login')}>Login</button>
                            </div>
                        }

                    </div>
                </div>
            </div>

        )
    }
}

