/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesview");
const NotesModel = require("./notesmodel");

describe("displays the notes in the model", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    notesModel = new NotesModel();
    notesView = new NotesView(notesModel);
  });

  describe("#displayNotesFromApi", () => {
    it("should fetch notes and display them", () => {
      const mockApi = {
        loadNotes: (callback) => {
          callback(["Note"]);
        },
      };

      view = new NotesView(notesModel, mockApi);

      view.displayNotesFromApi();

      expect(document.querySelectorAll(".note").length).toBe(1);
      expect(document.querySelector(".note").innerText).toBe("Note");
    });
  });

  describe("#displayNotes", () => {
    it("returns a list of notes", () => {
      notesModel.addNote(`hello`);
      notesView.displayNotes();
      expect(document.querySelectorAll("div.note").length).toBe(1);
    });

    it("can add a note with customised message", () => {
      const input = document.querySelector(`#note-body`);
      input.value = `Hello`;
      const addButtonEl = document.querySelector("#add-note");
      addButtonEl.click();
      expect(document.querySelector(".note").innerText).toBe(`Hello`);
    });

    it("only displays one copy of the notes", () => {
      notesModel.addNote("hello");
      notesView.displayNotes();
      notesView.displayNotes();
      expect(document.querySelectorAll("div.note").length).toBe(1);
    });
  });
});
