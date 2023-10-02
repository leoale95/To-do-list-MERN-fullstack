const { Router } = require("express");
const router = Router();

const {  getUsers,  createUser,  deleteUser,} = require("../controllers/user.controller.js");

router.get("/users", getUsers);

router.post("/users", createUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
