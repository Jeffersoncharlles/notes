import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../pages/_layouts/app'
import { Home } from '../pages/Home'
import { Error } from '../pages/Errors/Error'
import { NotFound } from '../pages/Errors/NotFound'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])