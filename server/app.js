const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    // pass in a schema property
  })
);

app.get("/", function (req, res) {
  console.log("get / ");
  return res.send("hello / ");
});

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
