const express = require('express');
const cors = require('cors');
const app = express();
const passport = require('./config/passport')()
const parser = require("body-parser");
const routeIndex = require ("./routes/routeIndex");

app.use(passport.initialize())
app.use(parser.json());
app.use(cors());
app.use(routeIndex);
app.use(require('./routes/routeIndex'))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});