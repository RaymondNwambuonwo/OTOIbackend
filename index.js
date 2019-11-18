const express = require('express')
const app = express();
const parser = require("body-parser");
const routeIndex = require ("./routes/routeIndex")

app.use(parser.json());

app.use(routeIndex);
app.use(require('./routes/routeIndex'))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});