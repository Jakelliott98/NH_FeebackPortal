import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Pages/Home/Homepage.jsx'
import FeedbackReportPage from './Pages/Reports/FeedbackReportPage.jsx'
import CommentsPageLogic from './Pages/Comments/CommentsPage.jsx'
import SettingsPage from './Pages/Settings/SettingsPage.jsx'
import LoginPage from './LoginPage.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Homepage />,
        handle: {title: 'Home'},
      },
      {
        path: 'FeedbackReports',
        element: <FeedbackReportPage />,
        handle: {title: 'Reports'},

      },
      {
        path: 'Comments',
        element: <CommentsPageLogic />,
        handle: {title: 'Comments'},
      },
      {
        path: 'Settings',
        element: <SettingsPage />,
        handle: {title: 'Settings'},
      }
    ]
  },
  {
    path: '/Login',
    element: <LoginPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>,
)
