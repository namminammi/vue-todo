import { onMounted, ref } from "vue";
import App from "../App.vue";
import { remult } from "remult";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const username = ref("");
const signedIn = ref(false);
async function signIn() {

    const result = await fetch("/api/signIn", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username.value }),
    });

    if (result.ok) {
        // console.log("REMULT USER: ", remult.user);
        remult.user = await result.json();
        signedIn.value = true;
    }
    else {
        console.log(await result.text());
    }
}
onMounted(async () => {
    const result = await fetch("/api/currentUser");
    remult.user = await result.json();
    signedIn.value = remult.authenticated();
});
async function signOut() {
    await fetch("/api/signOut", {
        method: "POST",
    });
    remult.user = undefined;
    signedIn.value = false;
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
    if (__VLS_ctx.signedIn) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (__VLS_ctx.remult.user?.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: ($event => __VLS_ctx.signOut()) }, });
        // @ts-ignore
        [signedIn, remult, signOut,];
        // @ts-ignore
        [App,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(App, new App({}));
        const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({}));
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(App, __VLS_1));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (($event) => __VLS_ctx.signIn()) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("Username, try Jane or Steve"), });
        (__VLS_ctx.username);
        // @ts-ignore
        [signIn, username,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
    }
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
                App: App,
                remult: remult,
                username: username,
                signedIn: signedIn,
                signIn: signIn,
                signOut: signOut,
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

//# sourceMappingURL=Auth.vue.js.map