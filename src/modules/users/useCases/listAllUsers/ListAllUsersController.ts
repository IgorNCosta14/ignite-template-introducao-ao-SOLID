/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    const id = user_id.toString();

    
    try {
      const users = this.listAllUsersUseCase.execute({user_id: id})

      return response.status(201).json(users)

    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { ListAllUsersController };
