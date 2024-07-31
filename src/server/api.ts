import { remultExpress } from "remult/remult-express";
import { Task } from "../shared/task";
import { TaskController } from "../shared/TasksController";
import { createPostgresConnection } from "remult/postgres";

import dotenv from 'dotenv';
dotenv.config();


const DB_URL = process.env["DATABASE_URL"]

console.log("api 🤪", DB_URL);

// https://stackoverflow.com/questions/22301722/ssl-for-postgresql-connection-nodejs
export const api = remultExpress({
  entities: [Task],
  controllers: [TaskController],
  getUser: (req) => req.session!["user"],
  dataProvider: createPostgresConnection({
    connectionString: DB_URL
  })
});
