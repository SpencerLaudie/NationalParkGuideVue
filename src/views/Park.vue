<template>
  <div class="park-data">
    <div class="park_content_container">
      <h6 id="park-designation">{{park.designation}}</h6>
      <div id="park-name" class='display-4'>{{park.name}}</div><br>
      <p id="park-description">{{park.description}}</p>
    </div>

    <div class="row">
        <div class="col-4 col-md-3">
          <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-fees-list" @click="toggle('hours')"  data-toggle="list" role="tab" aria-controls="fees">Entrance Fees</a>
            <a class="list-group-item list-group-item-action" id="list-hours-list"  @click="toggle('fees')" data-toggle="list" role="tab" aria-controls="profile">Hours</a>
          </div>
        </div>
        <div class="col-8 col-md-9">
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="list-fees" role="tabpanel" aria-labelledby="list-fees-list">
              <div class='fee-container' v-for="fee in park.entranceFees" :key="fee.title">
                <h2 class='font-weight-light'>${{fee.cost}}</h2>
                <div class='fee-description-container'>
                  <h6 class='fee-title'>{{fee.title}}</h6>
                  <p>{{fee.description}}</p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="list-hours" role="tabpanel" aria-labelledby="list-hours-list">
              <div class='hours-container' v-for="hour in park.operatingHours" :key="hour.name">
                <h3>{{hour.name}}</h3>
                <p>{{hour.description}}</p>
                <table>
                  <tr>
                    <td class='font-weight-bold'>Sunday</td>
                    <td>{{hour.standardHours.sunday}}</td>
                  </tr>
                  <tr>
                    <td class='font-weight-bold'>Monday</td>
                    <td>{{hour.standardHours.monday}}</td>
                  </tr>
                  <tr>
                    <td class='font-weight-bold'>Tuesday</td>
                    <td>{{hour.standardHours.tuesday}}</td>
                  </tr>
                  <tr>
                    <td class='font-weight-bold'>Wednesday</td>
                    <td>{{hour.standardHours.wednesday}}</td>
                  </tr>
                  <tr>
                    <td class='font-weight-bold'>Thursday</td>
                    <td>{{hour.standardHours.thursday}}</td>
                  </tr>
                  <tr>
                    <td class='font-weight-bold'>Friday</td>
                    <td>{{hour.standardHours.friday}}</td>
                  </tr>
                  <tr>
                    <td class='font-weight-bold'>Saturday</td>
                    <td>{{hour.standardHours.saturday}}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Park',
  data() {
      return {
        park: this.$route.query
      }
  },
  methods: {
    log() {
      console.log(this.park.operatingHours[0].standardHours.sunday);
    },
    toggle(which) {
      if (which == 'fees') {
        document.getElementById('list-fees').classList.remove('active');
        document.getElementById('list-hours').classList.add('active');
        document.getElementById('list-fees').classList.remove('show');
        document.getElementById('list-hours').classList.add('show');
        document.getElementById('list-fees-list').classList.remove('active');
        document.getElementById('list-hours-list').classList.add('active');
      }
      else {
        document.getElementById('list-hours').classList.remove('active');
        document.getElementById('list-fees').classList.add('active');
        document.getElementById('list-hours').classList.remove('show');
        document.getElementById('list-fees').classList.add('show');
        document.getElementById('list-hours-list').classList.remove('active');
        document.getElementById('list-fees-list').classList.add('active');
      }
    }
  }

}

</script>

<style scoped>

.park-data {
  background-color: white;
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
  padding: 5%;
  border-radius: 30px;
}

.park-data {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.park-data::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}

#park-img {
  width: 100%;
  height: 4vh;
}

.park_content_container {
  padding: 30px 20px;
}

.fee-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.fee-description-container {
  padding: 0 10px;
}

.fee-title {
  text-align: center;
}

.hours-container {
  margin-bottom: 40px;
  word-wrap: break-word;
}

.hours-container td {
  padding: 5px 10px;
}

.list-group {
  border: none;
}

.list-group .active {
  background-color: #02517d;
}

.list-group-item,
.list-group-item:first-child,
.list-group-item:last-child {
  border: none;
  border-radius: 30px;
}

@media only screen and (min-width: 600px) {
  .park-data {
    width: 80%;
    margin: 0 auto;
  }

  .park_content_container {
    padding: 30px 0;
  }

  .fee-container {
    display: flex;
    flex-direction: row;
  }

  .fee-description-container {
    padding: 0 0 0 40px;
  }

  .fee-title {
    text-align: left;
  }

}
</style>
