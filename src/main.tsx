import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ErrorBoundary } from './ErrorBoundary'
import { FormDataProvider } from './contexts/FormDataContext'
import { initializeUTMTracking } from './utils/utmTracking'

// Initialize UTM tracking on app load
initializeUTMTracking();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <FormDataProvider>
        <App />
      </FormDataProvider>
    </ErrorBoundary>
  </StrictMode>,
)
