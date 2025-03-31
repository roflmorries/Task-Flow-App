import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App.jsx'
import ThemeProvider from '../src/providers/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)