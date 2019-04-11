/**
 * Parses a CSV string into an array of objects.
 * @param {String} data the CSV string
 * @return {Array[Object]} array of objects representing rows in the CSV string
 */
export default (data) => {
  // Split the data into rows and cells
  const rows = data.split('\n').map((row) => row.split(','));
  // Remove the first row and remember it.  These are the column headers.
  const headers = rows.shift();
  // Map each row to an object with keys mapping to headers and values
  // mapping to cells.
  const parsed = rows.map(row =>
    row.reduce((obj, item, i) => {
      obj[headers[i]] = item;
      return obj;
    }, {})
  );
  return parsed;
};
