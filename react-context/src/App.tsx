import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToogle from './components/ThemeToogle';
import AuthContextProvider from './contexts/AuthContext';
import { BookContextProvider } from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToogle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
