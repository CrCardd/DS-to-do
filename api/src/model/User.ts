import mongoose, { Schema, Document} from "mongoose"
import bcrypt from 'bcrypt';


export interface IUser extends Document
{
    email : string,
    username : string,
    password : string
}



const UserSchema: Schema<IUser> = new Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    password : {type: String, required: true}
});

UserSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 1);
    }
    next();
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User