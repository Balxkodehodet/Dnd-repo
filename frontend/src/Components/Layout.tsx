// Layout.tsx
import {Link, Outlet} from 'react-router-dom'
export default function Layout(): React.JSX.Element {
  return (
    <>
      <header className="header">
        <h1 className="header-title">Dungeons & Dragons</h1>
      </header>
      <menu>
      <nav>
        <ul className="menu">
            <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/home/dashboard">Dashboard</Link>
            </li>
            <li>    
                <Link to="/home/profile">Profile</Link>
            </li>    
            <li>
                <Link to="/home/settings">Settings</Link>
            </li>
            <li>    
                <Link to="/home/logout">Logout</Link>

            </li>
        </ul>
      </nav>
      </menu>
    <main>
      
      <Outlet />

    </main>
    </>
  )
}      
    