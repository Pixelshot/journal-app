import users from '../users';

const User = () => {
  users.map((user) => {
    return <h2>{user.name}</h2>;
  });
};

export default User;
