"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const colaboradores_1 = require("../controllers/colaboradores");
const router = express_1.Router();
router.get('/', colaboradores_1.getColaboradores);
router.get('/:id', colaboradores_1.getColaborador);
router.post('/', colaboradores_1.postColaborador);
//router.put('/:id', putUsuario);
router.delete('/:id', colaboradores_1.deleteColaborador);
exports.default = router;
//# sourceMappingURL=colaborador.js.map