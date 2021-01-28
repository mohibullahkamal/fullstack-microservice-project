const mongo = require ('mongoose');

// ******* Super Important *********************************** */
MongoUrl = 'mongodb://localhost:27017/User';
// ***********************************************************


mongo.connect(MongoUrl, (err) => {
   if (!err) 
      console.log('MongoDB connection successful...');
   else 
      console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2))
});

module.exports = mongo;
