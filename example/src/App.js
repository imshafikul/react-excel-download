import "./App.css";
import books from "./books";
import { DownloadExcel } from "react-excel-export";

function App() {
  return (
    <div className="App">
      <header className="App-header">React Excel Export</header>
      <DownloadExcel
        data={books}
        className="btn"
        buttonLabel="Download top 90 books"
        fileName="top-90-books"
      />
    </div>
  );
}

export default App;
