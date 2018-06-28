<template>
    <v-flex>
        <v-card light>
            <v-card-media />
            <v-card-title> {{ album.name }} </v-card-title>
        </v-card>
    </v-flex>
</template>

<script>
export default {
  props: ["albumId"],
  created() {
    console.log("ALBUM", this.albumId);
  }
};
</script>

<style>
</style>
