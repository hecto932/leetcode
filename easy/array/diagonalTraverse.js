/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];
  const result = [];
  const moves = [
    { i: -1, j: 1 },
    { i: 1, j: -1 },
  ];

  const rows = matrix.length;
  const cols = matrix[0].length;

  let m = 0;
  let row = 0;
  let col = 0;
  for (let i = 0; i < rows * cols; ++i) {
    result.push(matrix[row][col]);

    row += moves[m].i;
    col += moves[m].j;

    if (row >= rows) {
      row = rows - 1;
      col = col + 2;
      m = 1 - m;
    }

    if (col >= cols) {
      col = cols - 1;
      row = row + 2;
      m = 1 - m;
    }

    if (row < 0) {
      row = 0;
      m = 1 - m;
    }

    if (col < 0) {
      col = 0;
      m = 1 - m;
    }
  }
  return result;
};

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(findDiagonalOrder(input));

40 USD de Merida a Boca de grita - Colombia
10000 COP a cucuta 
90000 COP de cucuta a bogota

100 USD de efectivo 

450 USD Bogota - Cucuta
