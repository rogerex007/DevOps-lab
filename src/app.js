import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Server ON" });
});

app.get("/users", (req, res) => {
    let users = [ { id: 1, name: "John" }, { id: 2, name: "Jane" } ];
    res.json(users);
});

export default app;