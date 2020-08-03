const express = require(`express`);
const fs = require(`fs`);

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`));