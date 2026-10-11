import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {AppProvider} from './Components/AppContext.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import LandingPage from './Components/LandingPage.tsx'
import Layout from './Components/Layout.tsx'
import LayoutLandingpage from './Components/LayoutLandingpage.tsx'
import CreateUser from './Components/CreateUser.tsx'
import LoginUser from './Components/LoginUser.tsx'
import Category from './Components/Category.tsx'
import Dashboard from './Components/Dashboard.tsx'
import Logout from './Components/Logout.tsx'
import SelectedPortrait from './Components/Gallery/SelectedPortrait.tsx'
import Gallery from './Components/Gallery/Gallery.tsx'
import CreateCharacter from './Components/CreateCharacter.tsx'
const queryClient = new QueryClient()
let className="empty";
let singleImg="empty";
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutLandingpage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'create-user', element: <CreateUser /> },
      { path: 'login-user', element: <LoginUser /> },
    ]

  },
  {
    path: '/home',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: ':category', element: <Category /> },
      { path: 'dashboard', element: <Dashboard/>},
      { path: 'logout', element: <Logout/>},
      { path: 'gallery', element: <Gallery singleImg={singleImg} className={className}/>},
      { path: 'selected-portrait/:id', element: <SelectedPortrait/>},
      { path: 'create-character', element: <CreateCharacter/>},
      { path: 'create-character/:id', element: <CreateCharacter/>},
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
