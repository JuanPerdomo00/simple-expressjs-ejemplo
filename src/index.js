const express = require("express"); // llamamos a express
const app = express(); // declaramos una constante con express
const puerto = 9090; // definimos el puerto


// rutas
app.get("/", (req, res) => {
	res.send("Hola Mundo desde express js :D");
});

app.get("/saludar", (req, res) => {
	res.json({
		mensaje: "Hola Como estas :)",
		autor: "te saluda juanperdomo",
		github: "https://github.com/JuanPerdomo00"
	});
});




// iniciamos el servidor
app.listen(puerto, () => {
	console.log(`servidor en escucha en http://localhost:${puerto}`);
});


