import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 7777;

const buildResponse = (
  status = "success",
  message = "Operation completed",
  data = {},
  headerCode = 200,
) => {
  return {
    status: status,
    message: message,
    data: data,
    headerCode: headerCode,
    timestamp: new Date().toISOString(),
  };
};

app.get("/", (req, res) => {
  const apiDescription = {
    version: "1.0.0",
    description: "This is the base endpoint for the yemowith SDK API.",
  };
  buildResponse("success", "Operation completed", apiDescription, 200);
  res.json(apiDescription);
});

app.get("/help", (req: Request, res: Response) => {
  const apiDescription = {
    endpoints: [
      {
        path: "/",
        method: "GET",
        description: "Returns a welcome message from yemowith SDK.",
      },
      {
        path: "/help",
        method: "GET",
        description: "Provides help information for yemowith SDK.",
      },
    ],
  };
  buildResponse("success", "Operation completed", apiDescription, 200);
  res.json(apiDescription);
});

export default { _app: app, _port: port, _buildResponse: buildResponse };
