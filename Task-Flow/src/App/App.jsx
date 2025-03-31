import './App.css'
import LanguageProvider from '../providers/LanguageProvider'
import ThemeProvider from '../providers/ThemeProvider'
import Nav from '../Nav/Nav'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Nav/>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
