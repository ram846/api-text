
const user = require('./user_routes');
const contact_us = require('./contact');
const enquiry_long = require('./enquiry-long');
module.exports = function(app){
    //app.use('/api/user', user)
    app.use('/api/contact_us/', contact_us)
    app.use('/api/enquiry/', enquiry_long)
    
}