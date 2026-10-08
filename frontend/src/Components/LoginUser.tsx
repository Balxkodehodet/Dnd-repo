import {type LoginUserData} from '../types/types';
import usePostData from '../Hooks/usePostData';
import {useNavigate} from 'react-router-dom';

// LoginUser.tsx
export default function LoginUser(): React.JSX.Element {

        const url = `${import.meta.env.VITE_API_URL}/api/login`;
        const loginUserMutation = usePostData<LoginUserData>(url);
        const navigate = useNavigate();

        async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const userData: LoginUserData = {
                email: formData.get('email') as string,
                password: formData.get('password') as string,
            };
            try {

            await loginUserMutation.mutateAsync(userData);
            navigate('/home/dashboard'); // Redirect to dashboard on successful login
            
            } catch (error) {
                navigate('/login-user'); // Redirect back to login page on error
                console.error('Login failed:', error);
            }
        }
    return (
        <>
        <div className="login-userform-container">
            <h2 className="login-user-title">Login</h2>
            <form className="login-user-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
                <button onClick={() => navigate('/')}>Back to start</button>
            </form>
        </div>
        <div className="create-userform-status">
                {loginUserMutation.isPending && <p>Logging in...</p>}
                {loginUserMutation.isError && <p>Error: {loginUserMutation.error.message}</p>}
                {loginUserMutation.isSuccess && <p>Login successful!</p> }
        </div>
        </>
    );
}