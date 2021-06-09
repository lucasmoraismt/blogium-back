import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/posts", (req, res) => {});

app.get("/posts/:id", (req, res) => {});

app.post("/posts", (req, res) => {});

app.listen(4001);
