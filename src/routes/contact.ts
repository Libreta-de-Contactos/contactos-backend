import { Router } from "express";
import { getContactById, getContacts, createContact, updateContact, deleteContact } from '../controllers/contactController';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

router.post('/create', verifyToken, createContact);
router.get('/getAll', verifyToken, getContacts);
router.get('/getById/:id', verifyToken, getContactById);
router.put('/update/:id', verifyToken, updateContact);
router.delete('/delete/:id', verifyToken, deleteContact);

export {router};