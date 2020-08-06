const express = require(`express`);
const fs = require(`fs`);
const routeAPI = require(`./Routes/API/routeAPI`)
const routeHTML = require(`./Routes/HTML/routeHTML`)

const app = express();

//REQUIRE MIDDLEWARE//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// this router's route URLs  are prefixed by /api
app.use(routeAPI);
app.use(routeHTML);

//INNARDS//

//API ROUTE//(MOVED TO ROUTES FOLDER)
//POST ROUTE//(MOVED TO ROUTES FOLDER)




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`));