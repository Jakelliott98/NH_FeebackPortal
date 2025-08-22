import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Reports from './Reports/Reports.jsx'
import PhysioHomepage from './Physio/Physio.jsx'
import HealthAssessments from './HA\'s/HealthAssessments.jsx'
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
        path: 'Reports',
        element: <Reports />
      },
      {
        path: 'HealthAssessments',
        element: <HealthAssessments />
      },
      {
        path: 'Physio',
        element: <PhysioHomepage />
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
