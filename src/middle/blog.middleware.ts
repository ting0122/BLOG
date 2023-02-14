import { Injectable, NestMiddleware, Redirect } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import session from "express-session";

@Injectable()
export class blogMiddleware implements NestMiddleware {
    use(req, res, next:NextFunction){
        console.log(req.session.visits);
        if(!req.session.visits){
            console.log('please sign in first');
            res.redirect('/');
        }
        else{
            console.log('welcome to blogs');
            next();
        }
    }
}