import type { UserInfo } from "remult";
import { json, Router } from "express";

const validUsers :UserInfo[]=[
    {id: "1", name: "Jane", roles: ["admin"]},
    {id: "2", name: "Steve"},
]

export const auth = Router();

auth.use(json());

auth.post("/api/signIn", (req, res)=> {
    const user = validUsers.find(user => user.name === req.body.username);
    if(user){
        req.session!["user"] = user;
        res.json(user);

    } else {
        res.status(404).json("Invalid user");
    }
})

auth.get("/api/currentUser", (req, res)=> res.json(req.session!["user"]));
auth.post("/api/signOut", (req, res)=> {
    res.json(req.session!["user"] = null)
    res.json("signed out")
})