const createUser = (username, email, password) => {
  return { username: username, email: email, password: password };
};

const users = [
  createUser('Dani', 'Dani@email.com', 'Password1!'),
  createUser('Gabriel', 'Gabriel@email.com', 'Password1!'),
  createUser('Joe', 'Joe@email.com', 'Password1!'),
  {
    username: 'admin',
    email: 'admin@admin.com',
    password: 'Password1!',
    isAdmin: true,
  },
];

export default users;
