import { Router } from "express";
import { getContactById, createContact, updateContact, deleteContact } from '../controllers/contactController';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

router.post('/create', verifyToken, createContact);
router.get('/getById/:id', verifyToken, getContactById);
router.put('/update/:id', verifyToken, updateContact);
router.delete('/delete/:id', verifyToken, deleteContact);

export {router};