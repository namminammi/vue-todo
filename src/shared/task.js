// shared : both FE and BE
import { __decorate } from "tslib";
import { Entity, Fields, Allow } from "remult";
// exposed full capability to the API
let Task = class Task {
    // @ specifying types
    id = 0;
    // @Fields.string({
    //     validate: Validators.required
    // })
    title = "";
    completed = false;
};
__decorate([
    Fields.autoIncrement()
], Task.prototype, "id", void 0);
__decorate([
    Fields.string({
        validate: (task) => {
            if (task.title.length < 3) {
                throw Error("Too short");
            }
        },
    })
], Task.prototype, "title", void 0);
__decorate([
    Fields.boolean()
], Task.prototype, "completed", void 0);
Task = __decorate([
    Entity("tasks", {
        allowApiCrud: Allow.authenticated,
        allowApiDelete: "admin",
        allowApiInsert: "admin",
    })
], Task);
export { Task };
//# sourceMappingURL=task.js.map