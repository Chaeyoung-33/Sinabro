import bcrypt from "bcryptjs";

class HandlePassword {
  comparePassword = async (password: string, password2: string) => {
    return await bcrypt.compare(password, password2);
  };

  hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10);
  };
}

export default HandlePassword;
