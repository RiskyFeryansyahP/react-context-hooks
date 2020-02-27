import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { BookDetail } from './BookDetail';

export const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className="book-list">
            <ul>
                { books.map(book => (
                    <BookDetail book={book} key={book.id} />
                )) }
            </ul>
        </div>
    ) : (
        <div className="empty"> No Books Here, Free Time :) </div>
    )
}
