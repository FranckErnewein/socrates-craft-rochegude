export default function world(size = 8) {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    let line = [];
    for(let j = 0; j < size; j++){
      line.push('grass');
    }
    matrix.push(line);
  }
  return matrix;
}
