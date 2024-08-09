import express from 'express'
import * as dotenv from 'dotenv'
const router = express.Router()

dotenv.config();

router.post("/generate", async (req, res) => {
  try {
    const { userPrompt } = req.body
    const form = new FormData()
    form.append('prompt', userPrompt)

    const clipDropResponse = await fetch(
      "https://clipdrop-api.co/text-to-image/v1",
      {
        method: "POST",
        headers: {
          "x-api-key": process.env.CLIPDROP_API_KEY, 
        },
        body: form,
      }
    );

    if (!clipDropResponse.ok) {
      const errorData = await clipDropResponse.json();
      throw new Error(`ClipDrop API error: ${errorData.message}`);
    }

    const imageBuffer = await clipDropResponse.arrayBuffer();

    const imageBase64 = Buffer.from(imageBuffer).toString("base64");

    res.json({ photo: imageBase64 });

    res.status(200)
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router
