import { __decorate } from "tslib";
import { BackendMethod, remult, Allow } from "remult";
import { Task } from "./task";
export class TaskController {
    static async setAllCompleted(completed) {
        const taskRepo = remult.repo(Task);
        for (const task of await taskRepo.find()) {
            await taskRepo.save({ ...task, completed });
        }
    }
}
__decorate([
    BackendMethod({ allowed: Allow.authenticated })
], TaskController, "setAllCompleted", null);
// video 29:43
//https://www.youtube.com/watch?v=oqqet79lmmU
//# sourceMappingURL=TasksController.js.map