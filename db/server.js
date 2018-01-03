var express = require('express');
var nedb = require('nedb');
var expressNedbRest = require('express-nedb-rest');
var cors = require('cors')

// setup express app
var oApp = express();

oApp.use(cors())

// create rest api router and connect it to datastore  
var restApi = expressNedbRest();
restApi.addDatastore('customers', new nedb({ filename: "db/customers.db",  autoload: true }));

// setup express server to serve rest service
oApp.use('/', restApi);

oApp.listen(8080, function () {
    console.log('you may use nedb rest api at port 8080');
});