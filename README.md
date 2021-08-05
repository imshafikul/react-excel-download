## react-excel-download

> React JSON to excel export

### [**Live Demo**](https://shafikulz.github.io/react-shimmer-effects/)

### [**Codesandbox**](https://44810.csb.app/)

## Install

```bash
npm install react-excel-export --save
```

or

```bash
yarn add react-excel-export
```

```jsx
import React from "react";
import { DownloadExcel } from "react-excel-export";

const books = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    language: "English",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    language: "Danish",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    language: "Italian",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
  },
];

class Example extends Component {
  render() {
    return (
      <DownloadExcel
        data={books}
        buttonLabel="Export Data"
        fileName="sample-file"
        className="export-button"
      />
    );
    return (
      <DownloadExcel
        data={books}
        className="btn"
        buttonLabel="Download top 90 books"
        fileName="top-90-books"
      />
    );
  }
}
```
