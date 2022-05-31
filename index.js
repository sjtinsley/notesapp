const NotesModel = require(`./notesmodel`)
const model = new NotesModel
const NotesView = require(`./notesview`)
const view = new NotesView(model)

model.addNote(`This is an example note`);
view.displayNotes();