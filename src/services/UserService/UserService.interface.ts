import User from "../../models/User.model";

interface UserService {
  findUserById(id: number): User;
  findFriendsByUserId(id?: number): User[];
}

export default UserService;
