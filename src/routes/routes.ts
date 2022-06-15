import { Router } from "express";
import { join } from "path";
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../public/index.html"));
});

router.get("/json", (req, res) => {
  res.json({ message: "Hello world" });
});

export default router;
