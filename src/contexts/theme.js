import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// Create a context for the theme
const ThemeContext = createContext()

// ThemeProvider component to provide theme context to its children
const ThemeProvider = ({ children }) => {
  // State to hold the current theme name, default is 'dark'
  const [themeName, setThemeName] = useState('dark')

  useEffect(() => {
    // Check if the user prefers a dark color scheme
    // const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    // Set the theme based on the user's preference
    // setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    // Add an event listener to update the theme when the preference changes
    // darkMediaQuery.addEventListener('change', (e) => {
    //   setThemeName(e.matches ? 'dark' : 'light')
    // });
  }, [])

  // Function to toggle the theme between 'dark' and 'light'
  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    // Save the selected theme to localStorage
    localStorage.setItem('themeName', name)
    // Update the state with the new theme
    setThemeName(name)
  }

  return (
    // Provide the theme context to the children components
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

// PropTypes to ensure the children prop is passed and is a node
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

// Export ThemeProvider and ThemeContext for use in other components
export { ThemeProvider, ThemeContext }
