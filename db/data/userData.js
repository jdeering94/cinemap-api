const createUser = (username, email, password) => {
  return { username: username, email: email, password: password };
};

const users = [
  createUser('user1', 'user1@email.com', 'Password1!'),
  createUser('user2', 'user2@email.com', 'Password1!'),
  createUser('user3', 'user3@email.com', 'Password1!'),
  {
    username: 'admin',
    email: 'admin@admin.com',
    password: 'Password1!',
    isAdmin: true,
  },
];

export default users;
