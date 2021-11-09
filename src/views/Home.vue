<template>
  <div class="home">
    <div class="hero">
        <h1>National Park Guide</h1>
        <p>This is your travel guide to the US National Parks.</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
body {
  background-image: url("../assets/glacier.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.home {
  height: 80vh;
  display: flex;
  justify-content: center;
}

.hero {
  width: 90%;
  height: 80%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.hero h1 {
  text-align: left;
  font-weight: 200;
  font-size: 3.4em;
  margin-bottom: 20px;
}

@media only screen and (min-width: 600px) {
  .hero {
    width: 80%;
  }
}

</style>
