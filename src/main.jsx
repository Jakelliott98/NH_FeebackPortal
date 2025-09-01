import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import FeedbackReports from './Pages/Reports/Reports.jsx'
import Comments from './Pages/Comments/Comments.jsx'

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
