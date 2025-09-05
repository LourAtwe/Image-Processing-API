import express from "express";
import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const app = express();
const MyThumb = "images/thumb";    
const MyFull = "images/full";  


app.get("/api2/images", async (req, res) => {
  const filename =String(req.query.filename);
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  if (!filename || !width || !height) {
    return res.status(400).send("Missing required query parameters⚠️");
  }

  const inputPath = path.join(MyFull, filename);

  try {
    
    const files = await fs.readdir(MyThumb);

    for (const file of files) {
      if (file.startsWith(path.parse(filename).name + "_")) {
        const filePath = path.join(MyThumb, file);

        const meta = await sharp(filePath).metadata();

        if (meta.width === width && meta.height === height) {
          return res.sendFile(path.resolve(filePath));
        }
      }
    }

   
    const buffer = await sharp(inputPath).resize(width, height).toBuffer();
    const newFileName = `${path.parse(filename).name}_${Date.now()}.png`;
    const outputPath = path.join(MyThumb, newFileName);
    await fs.writeFile(outputPath, buffer);
    console.log(" new image created", newFileName);
    res.sendFile(path.resolve(outputPath));

  } catch (err) {
    console.error(err);
    res.status(500).send("Errorrrrrr");
  }
});

app.listen(3001, () => {
  console.log("🚀 Server started at http://localhost:3001");
});
export {app};