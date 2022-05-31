class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    document.querySelector("#add-note").addEventListener("click", () => {
      let newNote = document.querySelector("#note-body").value;
      this.model.addNote(newNote);
      this.displayNotes();
      document.querySelector("#note-body").value = "";
    });
  }

  displayNotesFromApi() {
    this.api.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }

  displayNotes() {
    document.querySelectorAll(".note").forEach((note) => {
      note.remove();
    });

    this.model.getNotes().forEach((note) => {
      const newNote = document.createElement("div");
      newNote.classList.add("note");
      newNote.innerText = note;
      console.log(note);
      document.body.append(newNote);
    });
  }
}

module.exports = NotesView;
