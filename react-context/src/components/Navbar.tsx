import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext'

class Navbar extends React.Component {
    render() {
        return(
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isLightTheme, light, dark  } = themeContext
                    const theme = isLightTheme ? light : dark
                    const { isAuthenticated, toogleAuth } = authContext
                    return(
                        <nav style={{ background: theme.ui, color: theme.syntax,  }}>
                            <h1>Context Apps</h1>
                            <div onClick={toogleAuth}>
                                { isAuthenticated ? 'Logged In' : 'Logged Out' }
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}</ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        )
    }
}

export default Navbar