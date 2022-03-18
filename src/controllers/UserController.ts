import { Request, Response } from "express";

import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const userRepository = getRepository(User);

        const existUser = await userRepository.findOne({ 
            where: { 
                email 
            }
        });

        if (existUser) {
            return res.sendStatus(409);
        };

        const userRepo = userRepository.create({ 
            name, 
            email, 
            password 
        });
        console.log(userRepo);
        await userRepository.save(userRepo);

        return res.status(200).json(userRepo);
    };
};

export default new UserController();