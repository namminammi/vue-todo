<script setup lang="ts">
import { onMounted, ref } from "vue";
import App from "../App.vue";
import { remult } from "remult";

const username = ref("");
const signedIn = ref(false);

async function signIn() {
  //   console.log("session: ", remult);
  console.log("username: ", username.value);
  const result = await fetch("/api/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username.value }),
  });

  console.log("result: ", result);

  if (result.ok) {
    // console.log("REMULT USER: ", remult.user);
    remult.user = await result.json();
    signedIn.value = true;
  } else {
    console.log(await result.text());
  }
}

onMounted(async () => {
    const result = await fetch("/api/currentUser")
    remult.user = await result.json();
    signedIn.value = remult.authenticated();
})

async function signOut(){
    await fetch("/api/signOut", {
        method: "POST",

    });
    remult.user = undefined;
    signedIn.value = false;
    
}
</script>

<template>
  <div v-if="signedIn">
  Hej {{ remult.user?.name }}
  <button @click="$event=>signOut()">Sign out</button>
    <App />
  </div>
  <div v-else>
    <h1>To Do</h1>
    <main>
      <form @submit.prevent="($event) => signIn()">
        <input v-model="username" placeholder="Username, try Jane or Steve" />
        <button>Sign In</button>
      </form>
    </main>
  </div>
</template>
