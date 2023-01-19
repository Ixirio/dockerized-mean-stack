import { Request, Response, NextFunction } from 'express';

export default class HelloController {

    public hello(req: Request, res: Response, next: NextFunction): Response {
        return res.status(200).json('hello !');
    }

}
