const NotesModel = require('./notesmodel')

describe('NotesModel', () => {

  beforeEach( () => {
    let model = new NotesModel();
  });

  describe('#getNotes', () => {
    it('intialises with an empty array', () => {
      expect(model.getNotes()).toBe([])
    });
  });
});