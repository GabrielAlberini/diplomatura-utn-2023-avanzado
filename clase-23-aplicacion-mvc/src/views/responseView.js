// Manejar el output: "lo que le devuelvo al cliente".

export const sendJson = (response, statusCode, data) => {
  response.writeHead(statusCode, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data));
};
