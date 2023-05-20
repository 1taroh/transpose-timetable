const entry_tables = document.querySelectorAll(".entry_table");
if (entry_tables.length > 0) {
  entry_tables.forEach(function(table) {
    table.style.writingMode = "vertical-lr";
  });
} else {
  console.error(".entry_table要素が見つかりません");
}
