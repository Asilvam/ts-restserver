import {  Router } from "express";
import { deleteColaborador, getColaborador, getColaboradores, postColaborador } from "../controllers/colaboradores";

const router = Router();

router.get('/', getColaboradores);
router.get('/:id', getColaborador);
router.post('/', postColaborador);
//router.put('/:id', putUsuario);
router.delete('/:id', deleteColaborador);

export default router;