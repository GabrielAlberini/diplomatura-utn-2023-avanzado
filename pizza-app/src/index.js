import {
  createConnectionMongo,
  createDisconnectMongo,
} from "./database/mongodb.js";
import { handleParams } from "./utils/handleParams.js";

const main = async () => {
  const params = process.argv.splice(2);

  await createConnectionMongo();
  const reponse = await handleParams(params);
  console.log(reponse);
  await createDisconnectMongo();
};

main();
