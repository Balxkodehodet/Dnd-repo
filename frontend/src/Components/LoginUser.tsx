// LoginUser.tsx
export default function LoginUser(): React.JSX.Element {
    return (
        <div className="login-user-container">
            <h2 className="login-user-title">Login</h2>
            <form className="login-user-form">
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