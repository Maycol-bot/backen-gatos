import express from "express";
import multer from "multer";

import {
  registrarGato,
  obtenerGatos,
  actualizarGato
} from "../controllers/gato.controller.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});


// Registrar gato
router.post(
  "/gato",
  upload.single("imagen"),
  registrarGato
);


// Obtener todos los gatos
router.get("/gatos", obtenerGatos);

// Actualizar gato
router.put(
  "/gato/:id",
  upload.single("imagen"),
  actualizarGato
);



export default router;