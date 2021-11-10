<template>
  <div class="parks">
    <div class="page">
        <div class="search">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="30" height="30"
                viewBox="0 0 30 30"
                style=" fill:#343a40;"><path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path></svg>
          <input id="search" v-model="searchText" name="search" placeholder="Search a National Park">
        </div>

        <div v-if="loading" id="loading">
          <p>Loading...</p>
        </div>
        <div id="search-results" v-else>
          <ParkList :parks="parksSearched" />
        </div>



      </div>
  </div>
</template>

<script>
import axios from "axios";
import ParkList from "../components/ParkList.vue"
export default {
  name: 'Parks',
  components: {
    ParkList
  },
  data() {
    return {
      searchText: '',
      loading: false,
      allParks: [],
    }
  },
  computed: {
    parksSearched() {
      if (this.searchText == '') {
        return [];
      } else {
        return this.allParks.filter(park => park.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1);
      }
    }
  },
  created() {
    this.parks();
  },
  methods: {
    async parks() {
      try {
        this.loading = true;
        let url = "https://developer.nps.gov/api/v1/parks?limit=1000&api_key=F8sprrqRba2l3XbjhG2J0XK66ZIEyxB1CwUj9GqD";
        const response = await axios.get(url);
        this.allParks = response.data.data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.parks {
  display: flex;
  justify-content: center;
}

.page {
  margin-top: 30px;
  width: 70%;
  background-color: #fff;
  opacity: 90%;
  border-radius: 30px;
  min-height: 500px;
}

.search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  font-size: 2.7vw;
}

.search input {
  font-family: Montserrat;
  font-size: inherit;
  width: fit-content;
  margin: 0 20px;
  border: none;
  padding: 20px 10px;
}

.search input:focus {
  outline: none;
}

#search-results {
  padding: 30px 10%;

}

#search-results h2 {
  font-size: 3vw;
}



#loading {
  text-align: center;
}

</style>
