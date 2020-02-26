import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
/** 
 * context with class component
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
*/

export const ThemeToogle = () => {
    const { toogleTheme } = useContext(ThemeContext)
    return (
        <button onClick={toogleTheme}>Toogle The Theme</button>
    )
}


export default ThemeToogle
