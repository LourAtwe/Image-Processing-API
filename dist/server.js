import express from "express";
import { router as processImageRouter } from "./MyApi/processImage.js";
const app = express();
app.get("/", (req, res) => {
    res.status(200).send("Server is working ✅");
});
app.use("/processImage", processImageRouter);
app.listen(3001, () => {
    console.log("🚀 Server started at http://localhost:3001");
});
//# sourceMappingURL=server.js.map