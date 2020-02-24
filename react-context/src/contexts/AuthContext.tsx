import React, { Component, createContext} from 'react'

export const AuthContext = createContext({} as ContextProps)

interface ContextProps extends State {
    toogleAuth: () => void
}

interface State {
    isAuthenticated: boolean
}

interface Props {
    children: React.ReactNode
}

class AuthContextProvider extends Component<Props, State> {
    state : State = {
        isAuthenticated: false
    }

    toogleAuth = () => {
        this.setState((prevState, props) => {
            return { isAuthenticated: !prevState.isAuthenticated }
        })
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state, toogleAuth: this.toogleAuth}}>
                { this.props.children }
            </AuthContext.Provider>
        )
    }
}
export default AuthContextProvider
