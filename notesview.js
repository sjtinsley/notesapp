class NotesView {
  constructor(model) {
    this.model = model;
    console.log(document.body.innerHTML);
    document.querySelector('#add-note').addEventListener('click', () => {
      let newNote = document.querySelector('#note-body').value
      this.model.addNote(newNote);
      this.displayNotes();
      document.querySelector('#note-body').value = '';
   });
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach((note) => {
      note.remove();
    }
    )

    this.model.getNotes().forEach((x) => {
      const newNote = document.createElement('div');
      newNote.classList.add('note');
      newNote.innerHTML = (x);
      document.body.append(newNote);
    }
    )
    }
    
  } 

module.exports = NotesView;