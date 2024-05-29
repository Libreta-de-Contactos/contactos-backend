import { Request, Response, Router } from "express";

const router = Router();

/**
 * http://localhost:3002/contacts [GET]
 */
router.get('/', (req: Request, res: Response) => {
    res.send({data: 'Contacts models'});
});

export {router};