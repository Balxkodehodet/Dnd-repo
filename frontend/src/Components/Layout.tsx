// Layout.tsx
import {Link, Outlet} from 'react-router-dom'
export default function Layout() {
  return (
    <>
      <header className="header">
        <h1 className="header-title">Dungeons & Dragons</h1>
      </header>
      <menu>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      </menu>
    <main>
      
      <Outlet />

    </main>
    </>
  )
}      
    