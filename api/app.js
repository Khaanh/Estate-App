import express from "express";
import postRoute from "./routes/posts.route.js";

const app = express();

app.use("/api/posts", postRoute);

app.listen(8800, () => {
	console.log("Server is running");
});
