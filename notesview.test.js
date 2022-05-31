/**
 * @jest-environment jsdom
 */


const fs = require('fs');
const NotesView = require('./notesview');
const NotesModel = require('./notesmodel')



describe('displays the notes in the model', () => {
  describe('#displayNotes', () => {
    beforeEach(() => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      notesModel = new NotesModel
      notesView = new NotesView(notesModel);
    })

    it('returns a list of notes', () => {
      notesModel.addNote(`hello`);
      notesView.displayNotes();
      expect(document.querySelectorAll('div.note').length).toBe(1);
      });

      it('can add a note with customised message', () => {
        const input = document.querySelector(`#note-body`);
        input.value = `Hello`;
        const addButtonEl = document.querySelector('#add-note');
        addButtonEl.click();
        expect(document.querySelector('.note').innerHTML).toBe(`Hello`);
      });

      it('only displays one copy of the notes', () => {
        notesModel.addNote('hello');
        notesView.displayNotes();
        notesView.displayNotes();
        expect(document.querySelectorAll('div.note').length).toBe(1);
      });
  });
  
  
});