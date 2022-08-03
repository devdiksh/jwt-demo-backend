const validUsers = [
  {
    id: "8b1793b5-e7e8-49bc-9678-5833c16b2954",
    username: "deekshant",
    password: "test",
    name: "Deekshant",
    email: "deekshant.dev@gmail.com",
  },
];

const authUser = ({ username, password }) => {
  const userExist = validUsers.find((user) => user.username === username);
  if (userExist && userExist.password === password) {
    return {
      id: userExist.id,
      email: userExist.email,
    };
  }
  return false;
};

const getUser = ({ id }) => {
  const userExist = validUsers.find((user) => user.id === id);
  if (userExist) {
    const { password, ...rest } = userExist;
    return rest;
  }
  return false;
};

module.exports = { validUsers, authUser, getUser };
