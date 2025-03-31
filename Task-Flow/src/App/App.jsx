import './App.css'
import LanguageProvider from '../providers/LanguageProvider'
import ThemeProvider from '../providers/ThemeProvider'
import AuthProvider from '../providers/AuthProvider'
import Nav from '../Nav/Nav'
import Content from '../Content/Content'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
      <AuthProvider>
        <Nav/>

          <Content/>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
