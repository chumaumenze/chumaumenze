<template lang="pug">
  BlogHome
</template>

<script>
  import BlogHome from "../pages/Home";
  export default {
    name: "Index",
    mixins: [BlogHome],
    components: {BlogHome},
  }
</script>
