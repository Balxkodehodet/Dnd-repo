import {Link} from "react-router-dom";
export default function DashBoard(): React.JSX.Element {
    return (
        <>
        
            <div className="dashboard-container">
                <h2 className="dashboard-title">Dashboard</h2>
                <p>Welcome to the dashboard, Guest!</p>
            </div>
        
        <Link className="log-btn" to='/home/logout'><button>Logout</button></Link> : <Link to='/login-user'><button>Login</button></Link>
        </>
    );
}