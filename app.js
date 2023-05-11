const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

//RUTAS//
app.listen(process.env.PORT || 2000, () => {
    console.log("Servidor levantado")
});

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});

// app.get("/register", (req,res) => {
//     res.sendFile(path.join(__dirname, "/views/register.html"))
// });

// app.get("/login", (req,res) => {
//     res.sendFile(path.join(__dirname, "/views/login.html"))
// });