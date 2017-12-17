<template>
  <div id="app">

    <h1>{{ msg }}</h1>  
  </div>
</template>

<script>
import Pusher from 'pusher-js';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Leader dashboard for NASCAR'
    }
  },

  mounted: function () {
    this.initializePusher();
  },

  methods: {
    initializePusher() {
      Pusher.logToConsole = true;
      var pusher = new Pusher('4dc6e14ad6a0472b713d', {
        cluster: 'eu',
        encrypted: true
      });
      const channel = pusher.subscribe('nascar');
      channel.bind('driver', data => {
        this.updateDriverData(data)
      });
    },

     updateDriverData(data) {
       console.log(data.avg_finish_position);
     }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
