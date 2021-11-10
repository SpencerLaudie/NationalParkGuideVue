<template>
<div class="wrapper">
  <div v-for="park in limitedParks" :key="park.parkCode">
    <router-link :to="{path: '/park', query: park}" @click="setCurrPark(park)" class="park-link"><h2 class="park-result">{{park.name}}</h2></router-link>
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
  },
  methods: {
    setCurrPark(park) {
      this.$root.$data.currentPark = park;
    }
  }
}
</script>

<style scoped>
.park-link {
  color: #343a40;
  width: fit-content;
  text-decoration: none;
  text-align: left;
}

.park-link:hover {
  color: #02517d;
  cursor: pointer;
}
</style>
