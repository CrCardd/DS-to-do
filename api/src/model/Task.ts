import mongoose, { Schema, Document} from "mongoose"


export interface ITask extends Document
{
    idUser : string,
    title : string,
    description : string,
    complete : boolean
}



const TaskSchema: Schema<ITask> = new Schema({
    idUser: {type: String, required: false},
    title: {type: String, required: true},
    description: {type: String, required: true},
    complete : {type: Boolean, required: true}
});

// UserSchema.pre('save', async function (next) {
    // const user = this;
    // if (user.isModified('password')) {
    //   user.password = await bcrypt.hash(user.password, 1);
    // }
//     next();
// });

const Task = mongoose.model<ITask>('Task', TaskSchema);

export default Task