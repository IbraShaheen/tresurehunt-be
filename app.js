const express = require("express");
//const db = require("./db/models");
const thingRoutes = require("./routes/thingsRoutes");
const userRoutes = require("./routes/usersRoutes");
const cors = require("cors");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middlewares/passport");

const app = express();

app.use(express.json());
app.use(cors());

app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

app.use(userRoutes);
app.use(thingRoutes);

//not found M.W
app.use((req, res, next) => {
    res.status(404).json({ message: "path not found" });
  });
  
  // error M.W
  app.use((err, req, res, next) => {
    res.status(err.status ?? 500).json(err.message ?? "Internal sever error");
  });

//db.sequelize.sync({ alter: true });

app.listen(8000);