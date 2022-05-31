class NotesModel {
  constructor() {
    this.notes = [];
  }

  setNotes(array) {
    this.notes = array;
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;
