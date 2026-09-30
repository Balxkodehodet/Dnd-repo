// LandingPage.tsx
import {Link} from 'react-router-dom';
export default function LandingPage() {
  return (
    <>
    <div className="landing-page-container">
        <Link to="/create-user" className="create-user-link">
            <div className="create-user-container">
                <h3 className="create-user-title">Create User</h3>
            </div>
        </Link>
        <Link to="/login-user" className="login-user-link">
            <div className="login-user-container">
                <h3 className="login-user-title">Login User</h3>
            </div>
        </Link>
        <Link to="/home" className="guest-user-link">
            <div className="guest-user-container">
                <h3 className="guest-user-title">Guest User</h3>
            </div>
        </Link>
    </div>
    </>
  );
}