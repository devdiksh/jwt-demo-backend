const validUsers = [
  {
    username: "deekshant",
    password: "test",
  },
];

const authUser = ({ username, password }) => {
  const userExist = validUsers.find((user) => user.username === username);
  return userExist && userExist.password === password;
};

module.exports = { validUsers, authUser };
