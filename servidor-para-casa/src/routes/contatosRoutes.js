const express = require("express");
const router = express.Router();
const controller = require("../controllers/contatosControllers");

router.get("/", controller.getAll);
router.get("/nome", controller.getByName);
router.get("/:id", controller.getById);

router.post("/cadastrar", controller.createContact);
router.delete("/:id",controller.deleteContact);

module.exports = router;