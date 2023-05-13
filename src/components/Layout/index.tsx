import { Link, Outlet, useLocation } from 'react-router-dom'
import { getClass } from '@/utils'

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
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'résumé',
    path: '/resume',
  },
]

const Layout: React.FC = () => {
  const { pathname } = useLocation()

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
          <a href='//github.com/himanshupal' title='Github' target='_blank' className='link'>
            <span className='active'>[</span>Github<span className='active'>]</span>
          </a>
          <a href='//linkedin.com/in/mrhimanshupal' title='LinkedIn' target='_blank' className='link'>
            <span className='active'>[</span>LinkedIn<span className='active'>]</span>
          </a>
        </div>
      </header>

      <Outlet />

      <footer>
        <p>
          ({new Date().getFullYear()}) Himanshu Pal{' '}
          <span className='link'>
            root<span className='active'>[</span>at<span className='active'>]</span>rusted<span className='active'>[</span>dot
            <span className='active'>]</span>one
          </span>
        </p>
        <a href='https://www.catb.org/hacker-emblem' title='Hacker Emblem' target='_blank' className='link'>
          <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 56 56'>
            <rect style={{ fill: '#000', fillOpacity: 1, strokeWidth: 1, stroke: '#999', strokeOpacity: 1 }} width='54' height='54' x='1' y='1' />
            <rect style={{ fillOpacity: 0, strokeWidth: 1, stroke: '#999', strokeOpacity: 1 }} width='18' height='54' x='19' y='1' />
            <rect style={{ fillOpacity: 0, strokeWidth: 1, stroke: '#999', strokeOpacity: 1 }} width='54' height='18' x='1' y='19' />
            <circle style={{ fill: '#fff', fillOpacity: 1, strokeWidth: 0 }} cx='28' cy='10' r='7' />
            <circle style={{ fill: '#fff', fillOpacity: 1, strokeWidth: 0 }} cx='46' cy='28' r='7' />
            <circle style={{ fill: '#fff', fillOpacity: 1, strokeWidth: 0 }} cx='46' cy='46' r='7' />
            <circle style={{ fill: '#fff', fillOpacity: 1, strokeWidth: 0 }} cx='28' cy='46' r='7' />
            <circle style={{ fill: '#fff', fillOpacity: 1, strokeWidth: 0 }} cx='10' cy='46' r='7' />
          </svg>
        </a>
      </footer>
    </div>
  )
}

export default Layout
