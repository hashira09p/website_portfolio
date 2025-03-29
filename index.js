import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/sign_in", async (req, res) => {
  console.log(req.body.username);
});

app.post("/sign_up", async (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
});

app.listen(port, () => {
  console.log(`Server is running on localhost: ${port}`);
});