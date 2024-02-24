import jwt from 'jsonwebtoken';
import Express, { NextFunction } from 'express';



function authnticationToken(req : Express.Request,res: Express.Response,next : NextFunction){
    const JWT_SECRET :any = process.env.JWT_SECRET;
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null)
    return res.sendStatus(401);
    jwt.verify(token,JWT_SECRET,(error:any,response :any)=>{
        if(error)
            return res.sendStatus(403);
        res.locals = response;
        next();
    });
}
export default authnticationToken;