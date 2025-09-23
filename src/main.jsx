import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Pages/Home/Homepage.jsx'
import FeedbackReportPage from './Pages/Reports/FeedbackReportPage.jsx'
import CommentsPageLogic from './Pages/Comments/CommentsPage.jsx'
import SettingsPage from './Pages/Settings/SettingsPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'Home',
        element: <Homepage />
      },
      {
        path: 'FeedbackReports',
        element: <FeedbackReportPage />
      },
      {
        path: 'Comments',
        element: <CommentsPageLogic />
      },
      {
        path: 'Settings',
        element: <SettingsPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
