import net from "node:net";

const OPTIONS = {
  port: 1234,
  host: "127.0.0.1",
};

const clientTCP = net.connect(OPTIONS);

clientTCP.on("connect", () => {
  console.log("Conection succesful");

  const args = process.argv.splice(2);
  const request = JSON.stringify(args); // [ '--get', '--all' ]

  clientTCP.write(request);
});

clientTCP.on("data", (data) => {
  const stringResponse = data.toString();
  const response = JSON.parse(stringResponse);
  console.log(response);
  clientTCP.end();
});
