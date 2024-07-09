import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
	console.log("router test works!");
	res.send("router test works!");
});

export default router;
