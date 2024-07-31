<script setup lang="ts">
import { onMounted, ref } from "vue";
import App from "../App.vue";
import { remult } from "remult";

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
    remult.user = await result.json();
    signedIn.value = true;
  } else {
    alert(await result.text());
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
