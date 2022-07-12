import { Request, Response } from "express";
import { menuActivate } from "../helpers/menuActive";
import { bannerOption } from "../helpers/bannerOption";
import * as Pet from "../models/Pet";

class SiteController {
  static index = (req: Request, res: Response) =>
    res.render("home", {
      activate: menuActivate("all"),
      banner: bannerOption("Todos os Animais", "allanimals.jpg"),
      allPets: Pet.allPets,
    });

  static dogs = (req: Request, res: Response) =>
    res.render("dogs", {
      activate: menuActivate("dogs"),
      banner: bannerOption("Cachorros", "banner_dog.jpg"),
      dogsData: Pet.getDogs(),
    });

  static cats = (req: Request, res: Response) =>
    res.render("cats", {
      activate: menuActivate("cats"),
      banner: bannerOption("Gatos", "banner_cat.jpg"),
      catsData: Pet.getCats(),
    });

  static fishes = (req: Request, res: Response) =>
    res.render("fishes", {
      activate: menuActivate("fishes"),
      banner: bannerOption("Peixes", "banner_fish.jpg"),
      fishesData: Pet.getFishes(),
    });
}

export default SiteController;
