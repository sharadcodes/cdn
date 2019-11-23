# CSV to TABLE

>A tiny library for generating a table dynamically using CSV files

### INCLUDE THIS BEFORE CALLING ANY FUINCTION
```html
<script src="https://sharadcodes.github.io/cdn/csv_to_table/csv_to_table_v1.js"></script>
```

### How to use

To generate a table dynamically from a CSV file hosted someware follow these steps:

1. Create a table with the id `target_table` 
2. Call the function `getCSVTable("url",limit)`

**Here limit is the number of rows in csv starting from row 1.**

### SYNTAX TO USE

```js
getCSVTable("url",limit);
```

### EXAMPLE

```html
<table id="target_table"></table>

<script src="https://sharadcodes.github.io/cdn/csv_to_table/csv_to_table_v1.js"></script>

<script>
  getCSVTable("https://sharadcodes.github.io/noob-cms/data/MOCK_DATA.csv", 20);
</script>
```
