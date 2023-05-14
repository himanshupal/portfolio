import { Link, Outlet, useLocation } from 'react-router-dom'
import LinkTo from '@/components/Link'
import { getClass } from '@/utils'
import { useEffect, useState } from 'react'

interface Route {
  path: string
  name: string
}

const routes: Array<Route> = [
  {
    name: '$ whoami',
    path: '/',
  },
  {
    name: 'résumé',
    path: '/resume',
  },
]

const Layout: React.FC = () => {
  const { pathname } = useLocation()
  const { matches, addEventListener, removeEventListener } = window.matchMedia('(prefers-color-scheme: dark)')

  const [[circle, rect], setColors] = useState<[circle: string, rect: string]>(matches ? ['#fff', '#000'] : ['#000', '#fff'])

  useEffect(() => {
    const listener = ({ matches }: MediaQueryListEvent) => {
      setColors(matches ? ['#fff', '#000'] : ['#000', '#fff'])
    }

    addEventListener('change', listener)
    return () => removeEventListener('change', listener)
  }, [])

  return (
    <div className={getClass('container')}>
      <header>
        <nav className='nav'>
          {routes.map(({ path, name }) => (
            <Link key={path} className={getClass('link', path === pathname && 'active')} to={path}>
              {name}
            </Link>
          ))}
        </nav>
        <div className='nav'>
          <LinkTo url='//github.com/himanshupal' name='GitHub' />
          <LinkTo url='//linkedin.com/in/mrhimanshupal' name='LinkedIn' />
        </div>
      </header>

      <Outlet />

      <footer>
        <p>
          ({new Date().getFullYear()}) Himanshu Pal{' '}
          <span className='link'>
            mailtohimanshupal<span className='active'>[</span>at<span className='active'>]</span>gmail<span className='active'>[</span>dot
            <span className='active'>]</span>com
          </span>
        </p>
        <a href='https://www.catb.org/hacker-emblem' title='Hacker Emblem' target='_blank' className='link'>
          <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 56 56'>
            <rect style={{ fill: rect, fillOpacity: 1, strokeWidth: 1, stroke: '#999', strokeOpacity: 1 }} width='54' height='54' x='1' y='1' />
            <rect style={{ fillOpacity: 0, strokeWidth: 1, stroke: '#999', strokeOpacity: 1 }} width='18' height='54' x='19' y='1' />
            <rect style={{ fillOpacity: 0, strokeWidth: 1, stroke: '#999', strokeOpacity: 1 }} width='54' height='18' x='1' y='19' />
            <circle style={{ fill: circle, fillOpacity: 1, strokeWidth: 0 }} cx='28' cy='10' r='7' />
            <circle style={{ fill: circle, fillOpacity: 1, strokeWidth: 0 }} cx='46' cy='28' r='7' />
            <circle style={{ fill: circle, fillOpacity: 1, strokeWidth: 0 }} cx='46' cy='46' r='7' />
            <circle style={{ fill: circle, fillOpacity: 1, strokeWidth: 0 }} cx='28' cy='46' r='7' />
            <circle style={{ fill: circle, fillOpacity: 1, strokeWidth: 0 }} cx='10' cy='46' r='7' />
          </svg>
        </a>
      </footer>
    </div>
  )
}

export default Layout
