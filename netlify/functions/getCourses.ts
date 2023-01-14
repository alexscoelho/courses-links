import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { connectToDatabase } from "../../src/db/connection";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  context.callbackWaitsForEmptyEventLoop = false;

  // Get an instance of our database
  const db = await connectToDatabase();

  // Make a MongoDB MQL Query to go into the courses collection and return the first 10 courses.
  const courses = await db.collection("courses").find({}).limit(20).toArray();

  return {
    statusCode: 200,
    body: JSON.stringify(courses),
  };
};

export { handler };
