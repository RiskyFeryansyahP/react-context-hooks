import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext({} as ContextProps)

interface ContextProps {
    books: {
        id: number
        title: string
        author: string
    }[]
    addBook: (title: string, author: string) => void
    removeBook: (id: number) => void
}

interface Props {
    children: React.ReactNode
}

export const BookContextProvider = (props: Props) => {
    const [books, setBook] = useState([
        { title: 'Name Of The Wind', author: 'Patrick Rothfuss', id: 1 },
        { title: 'The Final Empire', author: 'Brandon Sanderson', id: 2 }
    ])

    const addBook = (title: string, author: string) => {
        setBook([...books, {title: title, author: author, id: parseInt(uuid()) }])
    }

    const removeBook = (id: number) => {
        setBook(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    )
}
