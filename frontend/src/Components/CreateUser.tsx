// CreateUser.tsx
import usePostData from '../Hooks/usePostData';
import { type CreateUserData } from '../types/types';

export default function CreateUser(): React.JSX.Element {


    const url = `${import.meta.env.VITE_API_URL}/api/users`;
    const createUserMutation = usePostData(url);

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData: CreateUserData = {
            username: formData.get('username') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };
        createUserMutation.mutate(userData);
    }
    return (
        <>
            
            <div className="create-userform-container">
                <h2 className="create-userform-title">Create User</h2>
                <form className="create-user-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit">Create User</button>
                </form>
            </div>
            <div className="create-userform-status">
                {createUserMutation.isPending && <p>Creating user...</p>}
                {createUserMutation.isError && <p>Error: {createUserMutation.error.message}</p>}
                {createUserMutation.isSuccess && <p>User created successfully!</p>}
            </div>
        </>
    );
}