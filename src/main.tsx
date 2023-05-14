import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import { StrictMode } from 'react'
import '@/styles/main.scss'

const Layout = lazy(() => import('@/components/Layout'))
const Resume = lazy(() => import('@/pages/Resume'))
const Home = lazy(() => import('@/pages/Home'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path='/' Component={Layout}>
            <Route index Component={Home} />
            <Route path='resume' Component={Resume} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
