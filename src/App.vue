<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { Task } from "./shared/task";
import { remult } from "remult";
import { TaskController } from "./shared/TasksController";

const tasks = ref<Task[]>([]);

const taskRepo = remult.repo(Task);

onMounted(() =>
  onUnmounted(
    taskRepo
      .liveQuery(
        // {limit: 2, page: 2}
        // {
        //   orderBy:{
        //     completed: "desc"
        //   }
        // }

        { where: { completed: undefined } } // undefined will ignore this filter
      )
      .subscribe((info) => (tasks.value = info.applyChanges(tasks.value)))
  )
);

const newTaskTitle = ref("");

async function addTask() {
  try {
    const newTask = await taskRepo.insert({ title: newTaskTitle.value });
    // tasks.value.push(newTask);
    newTaskTitle.value = "";
  } catch (e: any) {
    console.log(e.message);
  }
}

async function deleteTask(task: Task) {
  try {
    await taskRepo.delete(task);
    // tasks.value = tasks.value.filter(t=> t !== task)
  } catch (e: any) {
    console.log(e.message);
  }
}

async function saveTask(task: Task) {
  try {
    await taskRepo.save(task);
  } catch (e: any) {
    console.log(e.message);
  }
}

async function setAllCompleted(completed: boolean) {
  await TaskController.setAllCompleted(completed);
}
</script>

<template>
  <h1>To Dos</h1>
  <main>
    <form @submit.prevent="($event) => addTask()" 
      v-if="taskRepo.metadata.apiInsertAllowed()">
      <input placeholder="Vad man ska gora" v-model="newTaskTitle" /><button>Add</button>
    </form>
    <div v-for="task in tasks">
      <input type="checkbox" v-model="task.completed" @change="saveTask(task)" />
      <input v-model="task.title" />
      <button @click="saveTask(task)">Save</button>
      <button @click="deleteTask(task)" v-if="taskRepo.metadata.apiDeleteAllowed()">Delete</button>
    </div>
    <div>
      <button @click="setAllCompleted(true)">Set All Completed</button>
      <button @click="setAllCompleted(false)">Set All NOT complete</button>
    </div>
  </main>
</template>
