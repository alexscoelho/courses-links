// Import the MongoDB driver
const MongoClient = require("mongodb").MongoClient;

// Once we connect to the database once, we'll store that connection and reuse it so that we don't have to connect to the database on every request.
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  // Connect to our MongoDB database hosted on MongoDB Atlas
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  // Specify which database we want to use
  const db = await client.db("courses-link");

  cachedDb = db;
  return db;
}
