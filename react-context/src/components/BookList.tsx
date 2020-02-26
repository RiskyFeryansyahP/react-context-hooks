import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

/* 
* with class component
class BookList extends React.Component {

    static contextType = ThemeContext
    context!: React.ContextType<typeof ThemeContext>
    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return(
            <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
                <ul>
                    <li style={{ background: theme.ui }} >the way of kings</li>
                    <li style={{ background: theme.ui }} >the name of the world</li>
                    <li style={{ background: theme.ui }} >the final empire</li>
                </ul>
            </div>
        )
    }
} 
*/

const BookList: React.FunctionComponent<{}> = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { books } = useContext(BookContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                { books.map(book => (
                    <li key={book.id} style={{ background: theme.ui }}> { book.title } </li>
                )) }
            </ul>
        </div>
    )
}


export default BookList