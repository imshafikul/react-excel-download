import React from "react";

import { DownloadExcel } from "../";

describe("Download Excel", () => {
  it("is truthy", () => {
    expect(<DownloadExcel data={[]} />).toBeTruthy();
  });
});
