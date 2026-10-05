// CreateUser.tsx
import {useMutation} from '@tanstack/react-query';

type CreateUserData = {
    username: string;
    email: string;
    password: string;
};

export default function CreateUser(): React.JSX.Element {


    const createUserMutation = useMutation({
        mutationFn: async (userData: CreateUserData) => {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
        if (!response.ok) {
            throw new Error('Failed to create user');
        }
        return response.json();

        }
    })    
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

            {createUserMutation.isPending && <p>Creating user...</p>}
            {createUserMutation.isError && <p>Error: {createUserMutation.error.message}</p>}
            {createUserMutation.isSuccess && <p>User created successfully!</p>}
        </>
    );
}