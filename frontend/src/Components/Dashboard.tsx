import useGetData from "../Hooks/useGetData";
import {Link} from "react-router-dom";
import { type DashboardData } from "../types/types.ts";
export default function DashBoard(): React.JSX.Element {
    const {data, isLoading, isError} = useGetData<DashboardData>(`${import.meta.env.VITE_API_URL}/api/dashboard`);

    if (isLoading) {
        return <p>Loading dashboard...</p>;
    }

    if (isError) {
        return <>
                    <p>Error loading dashboard.</p>
                    <Link className="log-btn" to="/login-user"><button>Log in</button></Link>
                    <Link className="log-btn" to="/dashboard-guest"><button>Continue as guest</button></Link>
               </>
    }
   if (!data) {
        return <p>Loading dashboard...</p>;
    }

    return (
        <>
        {data && (
            <div className="dashboard-container">
                <h2 className="dashboard-title">Dashboard</h2>
                <p>Welcome to the dashboard, {data.isLoggedIn ? data.username : "guest"}!</p>
            </div>
        )}
        {data.isLoggedIn ? <Link className="log-btn" to='/home/logout'><button>Logout</button></Link> : <Link className="log-btn" to='/login-user'><button>Login</button></Link>}
        </>
    );
}
