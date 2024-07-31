import { BackendMethod, remult, Allow } from "remult";
import { Task } from "./task";

export class TaskController {
    @BackendMethod({allowed: Allow.authenticated })
    static async  setAllCompleted(completed: boolean ){
        const taskRepo = remult.repo(Task)
        for(const task of await taskRepo.find()){
          await taskRepo.save({...task, completed})
        }
      }
}

// video 29:43

//https://www.youtube.com/watch?v=oqqet79lmmU

