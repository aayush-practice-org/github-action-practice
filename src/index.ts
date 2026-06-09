import express  from 'express';
import type { Request, Response } from "express";

const app = express();
const PORT = Number(process.env.PORT);

app.use(express.json());


console.log("Port is :", PORT);

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

app.get("/", (req, res) => {
  res.send("hello");
});


app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})

export function addNumber(a: number, b: number) {
  return a + b;
}