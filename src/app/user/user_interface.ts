export type User = {
    id:string;
    email:string;
    password:string;
    role:'Faculty'|'Admin',
    status:'active'|'blocked'
    
}