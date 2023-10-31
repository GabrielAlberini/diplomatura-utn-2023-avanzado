import net from "node:net";

const PORT = 1234; // Las pc cuentan con 65565 puertos

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) => {
  console.log("Client connected " + new Date().toLocaleString());

  socket.on("data", (data) => {
    const stringRequest = data.toString();
    const r = JSON.parse(stringRequest); // ["get", "all"]
    let response;

    if (r[0] === "get" && r[1] === "all") {
      response = "El cliente quiere la lista completa de data"; // JSON
      socket.write(JSON.stringify(response));
    } else {
      response = "Request incorrecta";
      socket.write(JSON.stringify(response));
    }
  });

  socket.on("close", () => {
    console.log("Client disconnected " + new Date().toLocaleString());
  });

  socket.on("error", () => {
    console.log("Client error");
  });
});

serverTCP.listen(PORT, () => {
  console.log("Server up on port " + PORT);
});
