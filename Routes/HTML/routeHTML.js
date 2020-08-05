const express = require(`express`);
const router = express.Router();
const path = require(`path`);

//GET ROUTE//
//The following HTML routes should be created:
//GET /notes - Should return the notes.html file.
router.get("/notes", (request, response) => {
    response.sendFile(path.join(__dirname, "../../public/notes.html"));
});
//GET * - Should return the index.html file
router.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;