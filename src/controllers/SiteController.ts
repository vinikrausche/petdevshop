import { Request, Response } from "express";

class SiteController {
  static index = (req: Request, res: Response) => res.render("home");

  static dogs = (req: Request, res: Response) => res.render("dogs");

  static cats = (req: Request, res: Response) => res.render("cats");

  static fishes = (req: Request, res: Response) => res.render("fishes");
}

export default SiteController;
