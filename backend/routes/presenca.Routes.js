import express from "express";
import presencaModel from "../models/presencaModel.js";
import presencaController from "../controllers/presencaController.js";

const router = express.Router();

router.get("/presencas", presencaController.getPresencas);
router.get("/presenca/:id", presencaController.getPresencasById)