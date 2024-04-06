# TableToJson

TableToJson is a JavaScript class that converts HTML tables into JSON format. It provides a simple way to extract table data into a structured format that can be used in other parts of your application.

## Features

- Extracts table headers and rows
- Handles duplicate column names by appending an index
- Provides the count of headers and rows
- Provides the row data both with and without headers

## Usage

First, you need to create an instance of the `TableToJson` class, passing the HTML table element as an argument:

```javascript
const tableElement = document.querySelector('table');
const tableToJson = new TableToJson(tableElement);
```

Then, you can access the converted data through the details property:

```javascript
console.log(tableToJson.details);
```

The `details` property contains the following information:

```js
{
  headers: Array, // An array of table headers
  headersCount: Number, // The count of table headers
  rowData: Array, // An array of objects representing table rows, with keys as headers
  rowDataWithoutHeaders: Array, // An array of arrays representing table rows, without keys
  rowCount: Number // The count of table rows
}
```