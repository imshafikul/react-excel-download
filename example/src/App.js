import "./App.css";

import { DownloadExcel } from "react-excel-export";

const users = [
  {
    name: "Shafikul Islam",
    email: "shafikul.me@gmail.com",
  },
  {
    name: "Zubayer Anas",
    email: "zub.me@gmail.com",
  },
];

function App() {
  return (
    <div className="App">
      <DownloadExcel data={users} />
    </div>
  );
}

export default App;
