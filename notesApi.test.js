const NotesApi = require("./notesApi");

require("jest-fetch-mock").enableMocks();

describe("NotesAPI class", () => {
  it("calls fetch and loads data", () => {
    const notesApi = new NotesApi();

    fetch.mockResponseOnce(
      JSON.stringify({
        name: "Some value",
        id: 123,
      })
    );

    notesApi.loadNotes((returnedNotesFromApi) => {
      expect(returnedNotesFromApi.name).toBe("Some value");
      expect(returnedNotesFromApi.id).toBe(123);
    });
  });
});
