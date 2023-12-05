import { Types } from "mongoose";

export type Guardian = {
    fathersName:'string';
    mothersName:'string'
}

export type Faculty = {
    id:string;
    email:string;
    password:string;
    role:'Faculty'|'Admin',
    status:'active'|'blocked'
    phoneNumber:'string';
    address:string;
    faculty:Types.ObjectId;
    guardian:Guardian
}