import { hash, genSalt } from "bcrypt";

const saltRounds = 10;
const hashPassword = async (password) => {
  const salt = await genSalt(saltRounds);
  const hashPassword = await hash(password.toString(), salt);
  return hashPassword;
};

export default hashPassword;
