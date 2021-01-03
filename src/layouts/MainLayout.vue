<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          {{ $t("title") }}
        </q-toolbar-title>
        <!-- <q-space />
        <q-img
          src="~assets/riboon-light.png"
          width="79px"
          height="45px"
        ></q-img> -->
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
