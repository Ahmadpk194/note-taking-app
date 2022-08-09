import { useState } from "react";
import Count from "./components/Count";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App(props) {
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return [...prevValue.filter((note, i) => i !== id)];
    });
  }

  return (
    <div className="App">
      <Header />
      <Count
        count={
          notes.length === 0
            ? "Empty"
            : `Showing: ${notes.length} Notes in Database`
        }
      />
      <CreateArea onAdd={addNote} addDate={setDate} />{" "}
      {notes.map((note, i) => (
        <Note
          key={i}
          id={i}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
          date={date}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
