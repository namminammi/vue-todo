// shared : both FE and BE

import { Entity, Fields, Validators, Allow } from "remult";

// exposed full capability to the API
@Entity("tasks", {
  allowApiCrud: Allow.authenticated,
  allowApiDelete: "admin",
  allowApiInsert: "admin",
})
export class Task {
  // @ specifying types
  @Fields.autoIncrement()
  id = 0;
  // @Fields.string({
  //     validate: Validators.required
  // })
  @Fields.string<Task>({
    validate: (task) => {
      if (task.title.length < 3) {
        throw Error("Too short");
      }
    },
  })
  title = "";
  @Fields.boolean()
  completed = false;
}
