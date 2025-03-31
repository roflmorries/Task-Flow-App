import './App.css'
import LanguageProvider from '../providers/LanguageProvider'
import ThemeProvider from '../providers/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
