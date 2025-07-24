import express from "express";
import bodyParser from "body-parser";
import type { Labels, Response } from "./types";
import { addMember } from "./ghost";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/webhook", async (req, res) => {
  const { email, labels } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({
      success: false,
      error: "Missing or invalid email or chain in request body",
    });
  }

  let labelsToAdd: Labels[] = [];
  if (!labels) {
    labelsToAdd = [
      {
        name: "webhook-auto-import",
        slug: "webhook-auto-import",
      },
    ];
  } else {
    if (Array.isArray(labels)) {
      labelsToAdd = labels.map((label) => ({
        name: label,
        slug: label,
      }));
    } else {
      return res.status(400).json({
        success: false,
        error: "'labels' field must be an array of strings",
      });
    }
  }

  const ghostResponse = (await addMember(email, labelsToAdd)) as Response;

  if (ghostResponse.success) {
    res.status(200).json({
      success: true,
      message: "Member added successfully",
    });
  } else {
    res.status(500).json({
      success: false,
      error: ghostResponse.data.errors,
    });
  }
});

app.listen(PORT, () => {
  console.log(
    `🚀 Webhook server listening at http://localhost:${PORT}/webhook`
  );
});
