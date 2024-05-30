import { Router } from "express";
import verifyToken from '../middlewares/verifyToken';
import {verifyUser, createUser} from '../controllers/userController';

const router = Router();

router.get('/auth', verifyToken,(req, res) => res.json({ message: 'Active session' }) );
router.post('/login', verifyUser);
router.post('/create', createUser);

export {router};