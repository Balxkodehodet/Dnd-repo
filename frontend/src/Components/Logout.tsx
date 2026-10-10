import useGetData from "../Hooks/useGetData"
import { Link } from "react-router-dom";
export default function Logout() {
    const { data, isLoading, isError} = useGetData(`${import.meta.env.VITE_API_URL}/api/logout`);

    if (isLoading)
    {
        return <p>Loading...</p>
    }
    if (isError) {
        return <p>Error loading dashboard.</p>;
    }
    return (
        <>
            {data && (
            <div className="dashboard-container">
                <h2 className="dashboard-title">Dashboard</h2>
                <p>Welcome to the dashboard, Guest!</p>
            </div>
        ) }
        {data && <><p>{data.message}</p> <Link to='/login-user'><button>Login</button></Link></>}
        </>
    )
}