/*
MIT License

Copyright (c) 2024 Sharad Raj Singh Maurya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

class TableToJson {
  constructor(table) {
    this.table = table;
    this.details = this.convert();
  }

  convert() {
    const headers = this.getTableHeaders();
    const rows = this.getTableRows();

    const json = rows.map((row) => {
      const rowData = {};

      headers.forEach((header, index) => {
        const columnName = this.getUniqueColumnName(header, index);
        rowData[columnName] = row[index];
      });

      return rowData;
    });

    return {
      headers,
      headersCount: headers.length,
      rowData: json,
      rowDataWithoutHeaders: json.map((row) => Object.values(row)),
      rowCount: rows.length,
    }
  }

  getTableHeaders() {
    const headerRow = this.table.querySelectorAll("thead tr th");
    return Array.from(headerRow).map((header) => header.innerText);
  }

  getTableRows() {
    const tableRows = this.table.querySelectorAll("tbody tr");
    return Array.from(tableRows).map((row) =>
      Array.from(row.querySelectorAll("td")).map((cell) => cell.innerText)
    );
  }

  getUniqueColumnName(header, index) {
    let columnName = header.trim();

    if (index > 0) {
      const previousColumns = this.getTableHeaders().slice(0, index);
      const duplicateCount = previousColumns.filter(
        (column) => column === columnName
      ).length;

      if (duplicateCount > 0) {
        columnName += `_${duplicateCount}`;
      }
    }

    return columnName;
  }
}