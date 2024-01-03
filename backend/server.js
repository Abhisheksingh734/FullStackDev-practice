import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  // list of jokes
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      description: "This is joke 1",
    },
    {
      id: 2,
      title: "Joke 2",
      description: "This is joke 2",
    },
    {
      id: 3,
      title: "Joke 3",
      description: "This is joke 3",
    },
    {
      id: 4,
      title: "Joke 4",
      description: "This is joke 4",
    },
    {
      id: 5,
      title: "Joke 5",
      description: "This is joke 5",
    },
  ];

  res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
