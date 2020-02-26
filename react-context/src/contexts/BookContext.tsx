import React, { createContext, useState } from 'react'

export const BookContext = createContext({} as ContextProps)

interface ContextProps {
    books: {
        title: string
        id: number
    }[]
}

interface Props {
    children: React.ReactNode
}

export const BookContextProvider = (props : Props) => {
    const [books] = useState([
        { title : 'the way of kings', id: 1 },
        { title : 'the name of the world', id: 2 },
        { title : 'the final empire', id: 3 },
    ])
    return (
        <BookContext.Provider value={{books}}>
            { props.children }
        </BookContext.Provider>
    )
}
