import React from "react";
import { saveAs } from "file-saver";
import XLSX from "xlsx";
import PropTypes from "prop-types";

const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";

const DownloadExcel = ({ fileName, buttonLabel, invisible, data, itemKey }) => {
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = {
      Sheets: {
        data: ws,
      },
      SheetNames: ["data"],
    };

    const eb = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([eb], { type: EXCEL_TYPE });
    saveAs(blob, fileName + EXCEL_EXTENSION);
  };

  const style = {};
  if (invisible) style.display = "none";

  return (
    <button id={itemKey} onClick={exportToExcel} style={style}>
      {buttonLabel}
    </button>
  );
};

DownloadExcel.propTypes = {
  fileName: PropTypes.string.isRequired,
  invisible: PropTypes.bool,
  data: PropTypes.array.isRequired,
  buttonLabel: PropTypes.string,
  itemKey: PropTypes.string,
};

DownloadExcel.defaultProps = {
  invisible: false,
  buttonLabel: "Download Excel",
  itemKey: "",
  fileName: "sample",
};

export default DownloadExcel;
