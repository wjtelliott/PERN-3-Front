import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div>
        You must be logged in
        <Link to='/'>Back to home page</Link>
      </div>
    )
  }

  return (
    <div>
      <p>Hello, {JSON.stringify(user)}</p>
      <img src={user.picture} alt={user.name} />
      <h5>{user.name}</h5>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
