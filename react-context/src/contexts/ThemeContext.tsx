import React, { createContext, Component } from 'react';

export const ThemeContext = createContext({} as Context)

interface Context extends State {
    toogleTheme: () => void
}

interface State {
    isLightTheme: boolean
    light: {
        syntax: string
        ui: string
        bg: string
    }
    dark: {
        syntax: string
        ui: string
        bg: string
    }
}

interface Props {
    children: React.ReactNode
}

class ThemeContextProvider extends Component<Props, State> {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark : { syntax: '#ddd', ui: '#333', bg: '#555' }
    }

    toggleTheme = () => {
        this.setState((prevState, props) => {
           return { isLightTheme: !prevState.isLightTheme }
        })
    }

    render() {
        return(
            <ThemeContext.Provider value={{...this.state, toogleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider