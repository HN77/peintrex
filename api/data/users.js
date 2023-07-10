import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin@gmail.com', 10),
    isAdmin: true,
    isSeller: true,
  },
  {
    name: 'Joe',
    email: 'joe@gmail.com',
    password: bcrypt.hashSync('joe@gmail.com', 10),
    isAdmin: false,
    isSeller: true,
  },
  {
    name: 'Jane',
    email: 'jane@gmail.com',
    password: bcrypt.hashSync('jane@gmail.com', 10),
    isAdmin: false,
    isSeller: false,
  },
];

export default users;
