const db = require("../../db/db.json");
const express = require(`express`);
const router = express.Router();

const fs = require(`fs`);

const idFilter = req => member => member.id === parseInt(req.params.id);

//POST ROUTE//
//The following API routes should be created:

//GET /api/notes - Should read the db.json file and return all saved notes as JSON.
router.get("/api/notes", (request, response) => {
    response.json(db);
});

//POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
router.post("/api/notes", (request, response) => {
    //  const postNote = fs.readFileSync(`../../db/db.json`);
    let id = 1;
    if (db.length < 0) {
        id = db[db.length - 1].id + 1;
    }
    let newNote = {
        id: id,
        title: request.body.title,
        text: request.body.text
    };
    db.push(newNote);

    fs.writeFile("../../db/db.json", JSON.stringify(db), (err) => {
        response.json(db);
    })
});
// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
// It will do this by sending out the value "true" have a table
// req.body is available since we're using the body parsing middleware

//DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
router.delete("/api/notes/:id", (request, response) => {
    db.splice(request.params.id);
    response.json(db);
    response.send({ type: `DELETE` });
    console.log(request.params.id);
});

module.exports = router;