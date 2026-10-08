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
        <ul>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>    
                <Link to="/profile">Profile</Link>
            </li>    
                <Link to="/settings">Settings</Link>
            <li>    
                <Link to="/logout">Logout</Link>
                            
            </li>
        </ul>
        {data && (
            <div className="dashboard-container">
                <h2 className="dashboard-title">Dashboard</h2>
                <p>Welcome to the dashboard, {data.username}!</p>
            </div>
        )}
        </>
    );
}