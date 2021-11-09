<template>
<div class="wrapper">
  <div v-for="park in limitedParks" :key="park.parkCode">
    <a :href="'/park.html?parkCode='+park.parkCode"><h2 class="park-result">{{park.name}}</h2></a>
  </div>
</div>
</template>

<script>
export default {
  name: 'parkList',
  props: {
    parks: Array,
  },
  computed: {
    limitedParks() {
      return this.parks.slice(0, 10);
    }
  }
}
</script>
