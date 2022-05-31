const NotesModel = require("./notesmodel");

describe("NotesModel", () => {
  let model;
  beforeEach(() => {
    model = new NotesModel();
  });

  describe("#getNotes", () => {
    it("intialises with an empty array", () => {
      expect(model.getNotes()).toEqual([]);
    });
  });

  describe("#addNote", () => {
    it("adds a new note", () => {
      model.addNote("Buy milk");
      model.addNote("Go to the gym");
      expect(model.getNotes()).toEqual([`Buy milk`, `Go to the gym`]);
    });
  });

  describe("#reset", () => {
    it("will clear your notes", () => {
      model.addNote("Buy milk");
      model.reset();
      expect(model.getNotes()).toEqual([]);
    });
  });

  describe("#setNotes", () => {
    it("will set the notes to the given array", () => {
      model.setNotes(["note"]);

      expect(model.getNotes()).toEqual(["note"]);
    });
  });
});
