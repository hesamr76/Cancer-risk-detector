<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-deep-orange">
      <q-toolbar>
        <q-toolbar-title>
          {{ $t("title") }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout"
};
</script>
