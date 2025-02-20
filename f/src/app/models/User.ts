import { Task } from "./Task"

export interface User {
    email : string,
    username : string,
    password : string,
    tasks : Task[]
}