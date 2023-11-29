import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uriDb = process.env.URI_DB;

const clientMongo = new MongoClient(uriDb);

const createConnectionMongo = async () => {
  try {
    await clientMongo.connect();
    console.log("Connection to the database established.");
  } catch (err) {
    const msjError = `${err.code} - ${err.codeName}`;
    console.log("Authentication failed " + msjError);
  }
};

export { clientMongo, createConnectionMongo };
