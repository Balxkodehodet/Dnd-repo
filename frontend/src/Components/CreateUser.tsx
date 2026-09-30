export default function CreateUser() {
    return (
        <div className="create-userform-container">
            <h2 className="create-userform-title">Create User</h2>
            <form className="create-user-form">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Create User</button>
            </form>
        </div>
    );
}