import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

interface Props {
    book: {
        title: string
        author: string
        id: number
    }
}

export const BookDetail = ({ book }: Props) => {
    const { removeBook } = useContext(BookContext)
    return (
        <li onClick={() => removeBook(book.id)}>
            <div className="title"> {book.author} </div>
            <div className="author"> {book.author} </div>
        </li>
    )
}
