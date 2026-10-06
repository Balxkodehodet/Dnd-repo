import {type LoginUserData} from '../types/types';
import usePostData from '../Hooks/usePostData';

// LoginUser.tsx
export default function LoginUser(): React.JSX.Element {

        const url = 'http://localhost:3000/api/login';
        const loginUserMutation = usePostData<LoginUserData>(url);
    
        function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const userData: LoginUserData = {
                email: formData.get('email') as string,
                passwordhash: formData.get('password') as string,
            };
            loginUserMutation.mutate(userData);
        }
    return (
        <div className="login-user-container">
            <h2 className="login-user-title">Login</h2>
            <form className="login-user-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}