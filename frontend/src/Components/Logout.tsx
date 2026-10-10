import usePostData from "../Hooks/usePostData"
import { Link } from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query"
import {useEffect, useRef} from "react"
export default function Logout() {
    const logoutUserMutation = usePostData<void>(`${import.meta.env.VITE_API_URL}/api/logout`);
    let logOutStarted = useRef(false);
    const { mutateAsync } = logoutUserMutation;
    const queryClient = useQueryClient();

    useEffect(() => {
        if(logOutStarted.current) return;
        logOutStarted.current = true;
        async function logOutUser()
        {
            try {
                 await mutateAsync();
                queryClient.removeQueries({
                queryKey: ["dnd", `${import.meta.env.VITE_API_URL}/api/dashboard`]
                });
                }
            catch(err)
            {
               throw new Error("Error logging out")
            }
    
        }
            logOutUser();
        },[mutateAsync, queryClient])
    
    return (
        <>
            {logoutUserMutation.isSuccess && (
            <div className="dashboard-container">
                <h2 className="dashboard-title">Logged out</h2>
                <p>You successfully logged out!</p>
            </div>
        ) }
        {logoutUserMutation.isSuccess && <><p>{logoutUserMutation.data.message}</p> <Link to='/login-user'><button>Login</button></Link></>}
        </>
    )
}
