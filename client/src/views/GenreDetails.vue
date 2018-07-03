<template>
    <div>hello</div>
</template>

<script>
    export default {
      data() {
        return {};
      },
      props: ["genreId"],
      async created() {
        const { getGenreDetails } = this.$artistQuery;
        const { data } = await getGenreDetails(this.genreId);

        console.log(data);
      }
    };
</script>

<style>
</style>
