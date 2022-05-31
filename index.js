const NotesModel = require(`./notesmodel`);
const model = new NotesModel();
const NotesApi = require("./notesApi");
const api = new NotesApi();
const NotesView = require(`./notesview`);
const view = new NotesView(model, api);

// model.addNote(`This is an example note`);
// view.displayNotes();

view.displayNotesFromApi();
