<template lang="pug">
  v-btn.class="mx-2 openMail--button"(
    fab dark small depressed
    color="primary"
    @click="copySomething()"
    )
    v-icon(color="white") mdi-send
</template>

<style lang="scss">
.openMail--button {
  position: absolute;
  right: 0;
  top: 10px;
}
</style>
