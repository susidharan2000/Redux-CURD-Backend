import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../Controllers/UserController.js";


const router = express.Router();

router.get('/getUsers',getUsers);
router.post('/createUser',createUser);
router.put('/UpdateUser/:id',updateUser);
router.delete('/DeleteUser/:id',deleteUser);



export default router;
