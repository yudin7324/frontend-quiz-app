import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import App from '@/App.jsx'
import '@/styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <div className='main'>
        <App />
      </div>
    </ThemeProvider>
  </StrictMode>,
)
