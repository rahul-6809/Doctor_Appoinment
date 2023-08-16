const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const {connectMonoDb} = require("./config/db");
const path =require("path");

//dotenv conig
dotenv.config();

//mongodb connection
connectMonoDb();

//rest obejct
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));

app.use(express.static(path.join(__dirname,'../frontent_doc/build')));

app.get('*',(req,res) =>{
  res.sendFile(path.join(__dirname,'../frontent_doc/build/index.html'));
})

//routes
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/doctor", require("./routes/doctorRoutes"));

//port
const port = process.env.PORT || 4000;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
