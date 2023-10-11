const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db.js");
const colors = require("colors");
const noteRoutes = require("./routes/notesRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const { errorHandler, notFound } = require("./middleware/errorMiddleware.js");
const {PORT} = require("./config/keys.js")

dotenv.config();
connectDB();

const app = express(); // main thing
app.use(express.json()); // to accept json data

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World..");
});

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);


app.listen(
  PORT,
  console.log(
    `Server running at port ${PORT}..`.yellow
      .bold
  )
);
