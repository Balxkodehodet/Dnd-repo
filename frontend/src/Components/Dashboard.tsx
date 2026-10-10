import useGetData from "../Hooks/useGetData";
import {Link} from "react-router-dom";
export default function dashBoard(): React.JSX.Element {
    const {data, isLoading, isError} = useGetData(`${import.meta.env.VITE_API_URL}/api/dashboard`);

    if (isLoading) {
        return <p>Loading dashboard...</p>;
    }

    if (isError) {
        return <p>Error loading dashboard.</p>;
    }
    return (
        <>
        {data && (
            <div className="dashboard-container">
                <h2 className="dashboard-title">Dashboard</h2>
                <p>Welcome to the dashboard, {data.username || data.error}!</p>
            </div>
        )}
        {data.isLoggedIn ? <Link className="log-btn" to='/home/logout'><button>Logout</button></Link> : <Link to='/login-user'><button>Login</button></Link>}
        </>
    );
}