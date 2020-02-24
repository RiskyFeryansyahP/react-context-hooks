import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class ThemeToogle extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { toogleTheme } = context
                return (
                    <button onClick={toogleTheme}>Toogle The Theme</button>
                )
            }}</ThemeContext.Consumer>
        )
    }
}

export default ThemeToogle
