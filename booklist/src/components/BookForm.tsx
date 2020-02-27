import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';

export const BookForm = () => {
    const { addBook } = useContext(BookContext)

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="book" 
                id="book" 
                placeholder="Book Title" 
                value={title} 
                onChange={e => setTitle(e.target.value)}
            />
            <input 
                type="text" 
                name="book" 
                id="book" 
                placeholder="Book Author" 
                value={author} 
                onChange={e => setAuthor(e.target.value)}
            />
            <button type="submit">Add Book</button>
        </form>
    )
}
