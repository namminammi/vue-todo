import { onMounted, onUnmounted, ref } from "vue";
import { Task } from "./shared/task";
import { remult } from "remult";
import { TaskController } from "./shared/TasksController";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tasks = ref([]);
const taskRepo = remult.repo(Task);
onMounted(() => onUnmounted(taskRepo
    .liveQuery(
// {limit: 2, page: 2}
// {
//   orderBy:{
//     completed: "desc"
//   }
// }
{ where: { completed: undefined } } // undefined will ignore this filter
)
    .subscribe((info) => (tasks.value = info.applyChanges(tasks.value)))));
const newTaskTitle = ref("");
async function addTask() {
    try {
        const newTask = await taskRepo.insert({ title: newTaskTitle.value });
        // tasks.value.push(newTask);
        newTaskTitle.value = "";
    }
    catch (e) {
        console.log(e.message);
    }
}
async function deleteTask(task) {
    try {
        await taskRepo.delete(task);
        // tasks.value = tasks.value.filter(t=> t !== task)
    }
    catch (e) {
        console.log(e.message);
    }
}
async function saveTask(task) {
    try {
        await taskRepo.save(task);
    }
    catch (e) {
        console.log(e.message);
    }
}
async function setAllCompleted(completed) {
    await TaskController.setAllCompleted(completed);
}
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    if (__VLS_ctx.taskRepo.metadata.apiInsertAllowed()) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (($event) => __VLS_ctx.addTask()) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("Vad man ska gora"), });
        (__VLS_ctx.newTaskTitle);
        // @ts-ignore
        [taskRepo, addTask, newTaskTitle,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
    }
    for (const [task] of __VLS_getVForSourceType((__VLS_ctx.tasks))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (...[$event]) => {
                    __VLS_ctx.saveTask(task);
                    // @ts-ignore
                    [tasks, saveTask,];
                } }, type: ("checkbox"), });
        (task.completed);
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({});
        (task.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.saveTask(task);
                    // @ts-ignore
                    [saveTask,];
                } }, });
        if (__VLS_ctx.taskRepo.metadata.apiDeleteAllowed()) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.taskRepo.metadata.apiDeleteAllowed())))
                            return;
                        __VLS_ctx.deleteTask(task);
                        // @ts-ignore
                        [taskRepo, deleteTask,];
                    } }, });
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.setAllCompleted(true);
                // @ts-ignore
                [setAllCompleted,];
            } }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.setAllCompleted(false);
                // @ts-ignore
                [setAllCompleted,];
            } }, });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                tasks: tasks,
                taskRepo: taskRepo,
                newTaskTitle: newTaskTitle,
                addTask: addTask,
                deleteTask: deleteTask,
                saveTask: saveTask,
                setAllCompleted: setAllCompleted,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=App.vue.js.map