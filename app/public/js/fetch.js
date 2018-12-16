/* Fetch */

/*
 * @param {String} method The method of the Fetch request. One of: "GET", "POST", "PUT", "DELETE".
 * @param {String} url The url of the API to call, optionally with parameters.
 * @param {Object} headers The Associative Array containing the Request Headers. It must be null if there are no headers.
 * @param {String} body The body String to be sent to the server. It must be null if there is no body.
 */

                function doFetchRequest(method, url, headers, body) {

                if ((arguments.length) != 4 || (method !== "PUT" && method !== "POST" &&
                    method !== "GET" && method !== "DELETE") ||
                  ((body && typeof body !== 'string'))) {
                  throw new Error();
                } else if (method === "POST" || method === "PUT") {
                  return fetch(url, {
                    method: method,
                    headers: headers,
                    body: body
                  });
                } else {
                  return fetch(url, {
                    method: method,
                    headers: headers,
                    body : body //alarm
                  });
                }
                }
              function doJSONRequest(method, url, headers, body){
                if ((arguments.length != 4) || (method !== "PUT" && method !== "POST" &&
                      method !== "GET" && method !== "DELETE")) {
                    throw new Error('err');
                  }
                  if ((headers["Content-Type"] && headers["Content-Type"] !== "application/json") || (headers["Accept"] && headers["Accept"] !== "application/json")) {
                    throw new Error();
                  }
                  headers["Accept"] = "application/json";

                  if ((method === "POST") || (method === "PUT")) {
                    headers["Content-Type"] = "application/json";
                  }

                  return doFetchRequest(method, url, headers, JSON.stringify(body)).then((res) => {
                    return res.json();
                  });
              }
