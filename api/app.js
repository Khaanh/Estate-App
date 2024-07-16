import express from "express";
import postRoute from "./routes/posts.route.js";
import authRoute from "./routes/auth.routes.js";

const app = express();

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
	console.log("Server is running on port: 8800");
});
