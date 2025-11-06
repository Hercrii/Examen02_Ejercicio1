const express = require("express");

const mysql = require("mysql");

const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json());


const conexion = mysql.createConnection({

host: "localhost",

database: "pruebadbmysql",

user: "root",

password: ""

});


conexion.connect(err => {

if (err) {

console.error("Error de conexión:", err);

} else {

console.log("Conexión a MySQL exitosa");

}

});


app.get("/usuarios", (req, res) => {

conexion.query("SELECT * FROM usuarios", (err, results) => {

if (err) res.status(500).send(err);

else res.json(results);

});

});


app.listen(3000, () => {

console.log("Servidor corriendo en http://localhost:3000");

});