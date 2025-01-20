import { StrictMode, lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contact from './pages/contact/Contact.jsx'
import EducationPage from './pages/EducationPage/EducationPage.jsx'
import SkillsPage from './pages/SkillsPage/SkillsPage.jsx'
import Projectspage from './pages/ProjectsPage/Projectspage.jsx'

const Home = lazy(() => import("./pages/home/Home.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", /* default Child of app */
        element: <Suspense fallback={<h1 className='w-screen h-screen font-DM text-2xl font-semibold flex  justify-center items-center text-center '>Loading...!</h1>}>
          <Home />
        </Suspense>
      },
      {
        path:"/education", 
        element:<EducationPage/>
      },
      {
        path:"/skills", 
        element:<SkillsPage/>
      },
      {
        path:"/projects", 
        element:<Projectspage/>
      },
      {
        path:"/contact", 
        element:<Contact/>
      },
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
