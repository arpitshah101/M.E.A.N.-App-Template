import * as Promise from 'bluebird';
import { Request, Response, Router } from 'express';
import { QueryManager } from '../modules/queryModule';

const router = Router();

router.get('/test', (req: Request, res: Response, next: () => void) => {
    res.json({'test': 'name'});
    next();
});

router.get('/getUsers', (req: Request, res: Response, next: () => void) => {
    QueryManager.getAllUsers()
        .then((results: any[]) => {
            res.json(results);
        })
        .catch((reason) => {
            console.error(reason);
            res.sendStatus(500);
        })
        .finally(next);
});

export const TestRoutes = router;
