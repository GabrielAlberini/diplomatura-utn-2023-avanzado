import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const credential = process.env.URI_DB;

const client = new MongoClient(credential);

const createConnectionMongo = async () => {
  try {
    await client.connect();
    console.log("Connected :D");
  } catch (error) {
    console.log(error.code, error.message);
  }
};

const createDisconnectMongo = async () => {
  try {
    await client.close();
    console.log("Disconnected D:");
  } catch (error) {
    console.log(error.code, error.message);
  }
};

export { client, createConnectionMongo, createDisconnectMongo };
