import request from 'request';

/**
 * Loads a remote file.
 * @param {String} url the URL of the remote file
 * @return {Promise} a promise resolving to the body of the remote file if
 *   successful, an error or status code otherwise
 */
export default url => new Promise((resolve, reject) => {
  request.get(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      resolve(body);
    } else if (error || response.statusCode >= 300) {
      reject(error || response.statusCode);
    }
  });
});
