import express from "express";
import morgan from "morgan";
import { join } from "path";
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Static files
app.use(express.static(join(__dirname, "public")));

// Routes
import routes from "./routes/routes";
app.use(routes);

// Server listening
app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
});
