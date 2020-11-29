<template>
  <div>
    <ul>
      <li v-for="i in 100" :key='i'>Component2-{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Component2'
}
</script>
