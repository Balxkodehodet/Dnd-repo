import useGetData from "../Hooks/useGetData";

export default function dashBoard(): React.JSX.Element {
    const {data, isLoading, isError} = useGetData('http://localhost:3000/api/dashboard');

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
                <p>Welcome to the dashboard, {data.username}!</p>
            </div>
        )}
        </>
    );
}