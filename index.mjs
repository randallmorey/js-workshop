import getFile from './get-file';
import parseCSV from './parse-csv';

const url = 'https://gist.githubusercontent.com/mbostock/ddc6d50c313ebe6edb45519f43358c6c/raw/c443ed14c34c5c1b544949a546dd9d0acd05bad3/temperatures.csv';

// Print an error.
/*
getFile('https://www.example.net/no-such-file.json')
  .then(console.log)
  .catch(value => console.log(`Promise rejected with ${value}`));
*/

// Load data
getFile(url)
  // parse the data
  .then(parseCSV)
  // print the result
  .then(console.log);

// Or, use async/await to turn promises into procedural code.
const main = async () => {
  const data = await getFile(url);
  const parsed = await parseCSV(data);
  console.log(parsed);
};

main();
