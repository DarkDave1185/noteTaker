const express = require(`express`);
const fs = require(`fs`);

const app = express();

//INNARDS//
//GET ROUTE//
//The following HTML routes should be created:
//GET /notes - Should return the notes.html file.
app.get("/notes", (c, d) => {
    d.sendFile(path.join(__dirname, "./public/notes.html"));
});
//GET * - Should return the index.html file
app.get("/", (c, d) => {
    d.sendFile(path.join(__dirname, "./public/index.html"));
});

//**The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

//POST ROUTE//
//The following API routes should be created:

//GET /api/notes - Should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", (c, d) => {
    d.json(notes);
});

//POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
app.post("/api/tables", (c, d) => {
            // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
            // It will do this by sending out the value "true" have a table
            // req.body is available since we're using the body parsing middleware

            //DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
            app.post("/api/clear", (c, d) => {



                        const PORT = process.env.PORT || 5000;
                        app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`));