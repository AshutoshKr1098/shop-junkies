const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const port = process.env.PORT || 4000;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB = process.env.DATABASE.replace("<PASSWORD>", DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database!!!!");
  });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
