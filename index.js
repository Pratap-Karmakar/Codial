const port = 8000;
const express = require('express');
const app = express();


// so as we've exported the express router in the index.js which is in the router folder, now we have to tell app to use it.


// app.use('/', require('./routes'));

const routes = require('./routes');
app.use('/', routes);




// setting up the ejs view engine

app.set('view engine', 'ejs');
// app.set('views',path.join(__dirname));
app.set('views', './views');





app.listen(port, (error) => {    // => means that it is a function and 'error' is it's argument
    if (error) {
        console.log(`Error : ${error}`);
    }
    else {
        console.log(`Server On : ${port}`);
    }
})