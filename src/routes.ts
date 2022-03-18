import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

router.post('/', UserController.store);
router.get('/', UserController.store);

export default router;