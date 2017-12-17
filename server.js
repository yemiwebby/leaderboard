const driverData = require("./src/nascar.json");

const Pusher = require('pusher');
const pusher = new Pusher({
    appId: '446356',
    key: '4dc6e14ad6a0472b713d',
    secret: 'bc902d7b7128e5088b09',
    cluster: 'eu',
    encrypted: true
});

let i = 0;
setInterval(()  =>   {
    const drivers = driverData.season.driver[i];
    i++;
    pusher.trigger('nascar', 'driver', drivers);
}, 2000);