/* eslint-disable prettier/prettier */
// Import Router
import { Router } from 'express';

// Importando al controlador home
import homeController from '@server/controllers/homeController';

// Creando la instancia de un router
const router = new Router();

// GET '/'
router.get('/', homeController.index);

// Exportando el router que maneja  las subrutas
// para el controlador Home
export default router;
