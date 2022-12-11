import User, { UserDocument } from '../model/user.model';
import bcrypt from 'bcryptjs';

export async function register(user: UserDocument): Promise<void> {
 try {
   await User.create(user);
 } catch (error) {
   throw error;
 }
}

export async function login(user: UserDocument) {
    try {
      const foundUser = await User.findOne({ username: user.username });
   
      if (!foundUser) {
        throw new Error('Name of user is not correct');
      }
   
      const isMatch = bcrypt.compareSync(user.password, foundUser.password);
   
      if (isMatch) {
   return foundUser 
      } else {
        throw new Error('Password is not correct');
      }
    } catch (error) {
      throw error;
    }
}

export async function getAll() {
    const users = await User.find().exec();
    return users;
};