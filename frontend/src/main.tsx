import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {AppProvider} from './Components/AppContext.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import LandingPage from './Components/LandingPage.tsx'
import Layout from './Components/Layout.tsx'
import Category from './Components/Category.tsx'
import LayoutLandingpage from './Components/LayoutLandingpage.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutLandingpage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: '/:category', element: <Category /> }
    ]

  }
],
{ basename: import.meta.env.BASE_URL } // viktig!
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>,
)
