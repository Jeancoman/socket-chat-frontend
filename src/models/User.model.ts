interface User {
  id?: number;
  username: string;
  publicName?: string;
  userImageUrl: string;
  description?: string;
  passwordHash?: string;
};

export default User;
