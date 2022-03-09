const xyz = require('./people');

console.log(xyz.people,xyz.ages);

// object in which we store exported data from another file.
const { people } = require('./people');
console.log(people);


const os = require('os');
console.log(os.platform() ,os.homedir());