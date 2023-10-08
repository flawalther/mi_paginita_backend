const {Router} = require("express");
const { usuariosGet, usuariosPost, usuariosPut, usuarioDelete } = require("../controllers/usuarios");

const router = Router();

router.get("/",usuariosGet);
router.post("/", usuariosPost);
router.put("/", usuariosPut );
router.delete("/",usuarioDelete);

module.exports = router;