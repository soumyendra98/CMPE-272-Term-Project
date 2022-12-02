import { useSelector } from "react-redux";

export { Home };

function Home() {
  const { user: authUser } = useSelector((x) => x.auth);
  const { users } = useSelector((x) => x.users);

  if (authUser.isAdmin) {
    return (
      <div>
        <h1>Hi {authUser?.email}!</h1>
        <p>You're logged in with React 18 + Redux & JWT!!</p>
        <h3>Users from secure api end point:</h3>
        {users.length && (
          <ul>
            {users.map((user, i) => (
              <li key={i}>{user.email}</li>
            ))}
          </ul>
        )}
        {users.loading && (
          <div className="spinner-border spinner-border-sm"></div>
        )}
        {users.error && (
          <div className="text-danger">
            Error loading users: {users.error.message}
          </div>
        )}
      </div>
    );
  }
}
