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
  }
}
```

#### Properties

| Property      | Type   | Required | Default value | Description                                                                                                |
| :------------ | :----- | :------- | :------------ | :--------------------------------------------------------------------------------------------------------- |
| `data`        | array  | yes      |               | Data array                                                                                                 |
| `fileName`    | string | yes      | sample-file   | Filename of the sheet                                                                                      |
| `buttonLabel` | string | yes      | Export Data   | Futton Label                                                                                               |
| `className`   | string | no       |               | Additional style classes                                                                                   |
| `invisible`   | bool   | no       | false         | Button will hide by Style                                                                                  |
| `itemKey`     | bool   | no       |               | value will use in button `id` property.You can use this id to export content without displaying the button |
