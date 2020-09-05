const dataAccess = require("../data-access/admin-users-data-access");
const bcrypt = require("bcrypt");

const createAdminUser = async (req) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  dataAccess.createAdminUser(req.body.username, hashedPassword);
  return true;
};

const loginAdminUser = async (req) => {
  const foundUser = await dataAccess.getAdminUserByName(req.body.username);
  if (foundUser) {
    return await bcrypt.compare(req.body.password, foundUser.hashed_password);
  }
  return false;
};

module.exports = {
  createAdminUser,
  loginAdminUser,
};
