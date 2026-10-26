import express from "express";
import cors from "cors";  //Para que el frontend pueda llamar
import gatoRoutes from "./routes/gato.routes.js";
import { capturarInfoSolicitud } from "./middlewares/auditoria.js";
import estadisticasRoutes from "./routes/estadisticas.routes.js";
const app = express();

// Middlewares
app.use(cors());  //Permite peticiones desde cualquier origen
app.use(express.json());
app.use(capturarInfoSolicitud);  // Middleware para capturar información de la solicitud
app.use(express.urlencoded({ extended: true }));  //Para poder recibir datos de formularios

// ...
app.use(estadisticasRoutes); // agrega esta línea junto a las otras rutas
// Rutas
app.use(gatoRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ mensaje: "Ruta no registrada." });
});

export default app;