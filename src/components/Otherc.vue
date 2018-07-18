<template>
  <div class="hello">
      <v-select :items="items"/>
  </div>
</template>

<script>
export default {
  name: 'Otherc',
  data: () => ({
    items: ['a','b', 'c']
  })
}
</script>