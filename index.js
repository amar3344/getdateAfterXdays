const addDays = require("date-fns/addDays");

const results = addDays(new Date(2020, 7, 22), 3);
console.log(results);

module.exports = results;
