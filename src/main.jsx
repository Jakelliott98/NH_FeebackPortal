import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import FeedbackReports from './Reports/Reports.jsx'
import Comments from './Comments/Comments.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'Home',
        element: <Home />
      },
      {
        path: 'FeedbackReports',
        element: <FeedbackReports />
      },
      {
        path: 'Comments',
        element: <Comments />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
