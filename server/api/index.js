import config from "dotenv";
import express from "express";
// import bodyParser from "body-parser";
import userRoutes from "./../api/server/src/routes/UserRoutes.js";
import userGroupsRoutes from "./../api/server/src/routes/UserGroupsRoutes.js";
import groupRoutes from "./../api/server/src/routes/GroupRoutes.js";
import userChoicesRoutes from "./../api/server/src/routes/UserChoicesRoutes.js";
import groupChoicesRoutes from "./../api/server/src/routes/GroupChoicesRoutes.js";
import loginRoute from './../api/server/src/routes/LoginRoute.js';

const port = process.env.PORT || 3000;
const cors = require("cors");
config.config();
// const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//
app.use("/users", userRoutes);
app.use("/groups", groupRoutes);
app.use("/userchoices", userChoicesRoutes);
app.use("/groupchoices", groupChoicesRoutes);
app.use("/usergroups", userGroupsRoutes);
app.use("/login", loginRoute);
//


app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
