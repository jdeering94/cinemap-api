const createUser = (username, email, password) => {
  return { username: username, email: email, password: password };
};

const users = [
  createUser('user1', 'user@email.com', 'Password1!'),
  {
    username: 'admin',
    email: 'admin@admin.com',
    password: 'Password!1',
    isAdmin: true,
  },
];

export default users;
