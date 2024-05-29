import { Router } from "express";
import contactController from '../controllers/contactController';

const router = Router();

router.post('/create', contactController.createContact);
router.get('/getById/:id', contactController.getContactById);
router.put('/update/:id', contactController.updateContact);
router.delete('/delete/:id', contactController.deleteContact);

export {router};