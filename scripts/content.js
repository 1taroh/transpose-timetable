function transposeTable(partialTable) {
    // 入力された部分的なテーブルの行数と列数を取得
    const rowCount = partialTable.length;
    const colCount = partialTable[0].length;
  
    // 転置したテーブルを作成するための空の配列を作成
    let transposedTable = [];
  
    // テーブルの行と列を入れ替えて転置したテーブルを作成
    for (let i = 0; i < colCount; i++) {
      transposedTable[i] = [];
      for (let j = 0; j < rowCount; j++) {
        transposedTable[i][j] = partialTable[j][i];
      }
    }
  
    return transposedTable;
  }

// HTMLのテーブルを取得
const entry_tables = document.querySelectorAll(".entry_table");
let entry_table = entry_tables[0];
let transposed_entry_table = entry_table;

const rowCount = entry_table.rows.length;
const colCount = 6;

// 部分的なHTMLテーブルとして抽出する範囲を指定
const startRow = 3;
const endRow = 8;
const startCol = 0;
const endCol = 5;

// console.log("test");
// console.log("entry_table",entry_table);

// テーブルの行を抽出して部分的なテーブルを作成
const partialContent = Array.from(entry_table.rows).slice(startRow, endRow + 1).map(function(row) {
    // 行のセルを抽出して部分的な行を作成
    const cells = Array.from(row.cells).slice(startCol, endCol + 1);
    // 部分的な行のセルを配列として返す
    return cells.map(function(cell) {
      return cell.innerHTML;
    });
});

// テーブルのクラスを抽出して，部分的なclassタグを管理する配列を作成
const partialClassTypes = Array.from(entry_table.rows).slice(startRow, endRow + 1).map(function(row) {
  // 行のセルを抽出して部分的な行を作成
  const cells = Array.from(row.cells).slice(startCol, endCol + 1);
  // 部分的な行のセルを配列として返す
  return cells.map(function(cell) {
    return cell.className;
  });
});
const transposedpartialContent = transposeTable(partialContent);
const transposedPartialClassTypes = transposeTable(partialClassTypes);
// console.log("partialClassTypes",partialClassTypes);
// console.log("transposedPartialClassTypes",transposedPartialClassTypes);

for (let i = 0; i < rowCount; i++) {
    // 抽出していない部分はいじらない
    if (i < startRow || endRow < i) continue;

    // innerHTMLとclassNameをいれていく
    for (let j = 0;j < colCount; j++) {
        // console.log("i=",i," j=",j);
        let cell = transposed_entry_table.rows[i].cells[j];
        // console.log("before",cell);
        // console.log("transposedPartialClassTypes[i-startRow][j]",transposedPartialClassTypes[i-startRow][j]);
        cell.className = transposedPartialClassTypes[i-startRow][j];
        cell.innerHTML = transposedpartialContent[i-startRow][j];
        // console.log("after",cell);
    }
}

// console.log(transposed_entry_table)