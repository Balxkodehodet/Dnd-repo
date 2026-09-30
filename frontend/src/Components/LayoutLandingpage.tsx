// LayoutLandingpage.tsx
import {Outlet} from 'react-router-dom'
export default function LayoutLandingpage(): React.JSX.Element {
    return (
        <>
            <header className="header">
                <div className="header-title-container">
                <h1 className="header-title">Dungeons & Dragons</h1>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )

}