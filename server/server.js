const express = require("express");
const app = express();
const PORT = 3000;

//Middleware
//serve static files
app.use(express.static('client/dist'));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});