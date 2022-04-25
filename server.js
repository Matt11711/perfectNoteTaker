
// needed for express to know the right port and work as a server
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// just my routers because my code is in different files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// tell my app to look in the public folder
app.use(express.static('public'));

// direct my routers to the right files
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// start the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });