import React, { createContext, useState, useReducer } from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext({} as ContextProps)

interface ContextProps extends State {
    dispatch: React.Dispatch<Action>
}

interface State {
    books: {
        id: number
        title: string
        author: string
    }[]
}

interface Book {
    title: string
    author: string
}

interface Props {
    children: React.ReactNode
}

type Action =
| { type: 'ADD_BOOK', book: Book }
| { type: 'REMOVE_BOOK', id: number }

function reducer(state: State, action: Action): State {
    switch(action.type){
        case 'ADD_BOOK':
            return {
                books: [...state.books, {
                    title: action.book.title,
                    author: action.book.author,
                    id: parseInt(uuid())
                }]
            }
        case 'REMOVE_BOOK':
            return {
                books: state.books.filter(book => book.id !== action.id)
            }
    }
}

export const BookContextProvider = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, {books: []})
    // const [books, setBook] = useState([
    //     { title: 'Name Of The Wind', author: 'Patrick Rothfuss', id: 1 },
    //     { title: 'The Final Empire', author: 'Brandon Sanderson', id: 2 }
    // ])

    // const addBook = (title: string, author: string) => {
    //     setBook([...books, {title: title, author: author, id: parseInt(uuid()) }])
    // }

    // const removeBook = (id: number) => {
    //     setBook(books.filter(book => book.id !== id))
    // }

    return (
        <BookContext.Provider value={{dispatch: dispatch, books: state.books}}>
            { props.children }
        </BookContext.Provider>
    )
}
