import express  from 'express';
import type { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/post", async (req: Request, res: Response): Promise<void> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    res.send(data);
});

app.get("/post/:id", async (req: Request, res: Response): Promise<void> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
    const data = await response.json();
    res.send(data);
});

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})