import express from "express";
import { api } from "./api";
import session from "cookie-session";
import { auth } from "./auth";
import dotenv from 'dotenv';
dotenv.config();
const sessionPW = process.env['SESSION_SECRET'];
const app = express();
app.use(session({ secret: sessionPW }));
app.use(auth);
app.use(api);
//http://localhost:3002/api/hi
app.get("/api/hi", (req, res) => {
    res.send("HELLOO");
});
app.use(express.static(process.cwd() + "/dist"));
app.listen(3002, () => console.log("started :D ", process.cwd(), 'TESTTTT'));
//# sourceMappingURL=index.js.map