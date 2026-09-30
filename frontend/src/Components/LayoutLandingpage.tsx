// LayoutLandingpage.tsx
import {Outlet} from 'react-router-dom'
export default function LayoutLandingpage() {
    return (
        <>
            <header className="header">
                <h1 className="header-title">Dungeons & Dragons</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )

}