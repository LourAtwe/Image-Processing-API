import express from "express";
import { router as processImageRouter } from "../processImage.js";
import supertest from "supertest";

const app = express();
app.use("/processImage", processImageRouter); 
const request = supertest(app);


describe("Check endpoint response ", () => {
 it("Get the Api image Endpoint !!", async () => {
    const response = await request.get("/processImage/api2/images?filename=Lour.png&width=200&height=200");
    expect(response.status).toBe(200);
  });
    it("No parameters missing !!", async () => {
    const response = await request.get("/processImage/api2/images?filename=Lour.png&width=200&height=200");
    expect(response.status).toBe(200);
  });
    it("should return 400 for invalid query parameters", async () => {
    const response = await request.get("/processImage/api2/images?width=abc&height=100");
    expect(response.status).toBe(400);
  });
   it("should return 400 if there is any parameter missing", async () => {
    const response = await request.get("/processImage/api2/images?filename=Lour.png");
    expect(response.status).toBe(400);
  });
});
