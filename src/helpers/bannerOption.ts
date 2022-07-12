type TitleType =
  | "Todos os Animais"
  | "Cachorros"
  | "Gatos"
  | "Peixes"
  | "Não encontrado";

type BannerType =
  | "allanimals.jpg"
  | "banner_cat.jpg"
  | "banner_dog.jpg"
  | "banner_fish.jpg"
  | "not-found.jpg";

export const bannerOption = (
  optionTitle: TitleType,
  optionBanner: BannerType
) => {
  const Banner = {
    title: "",
    photo: "",
  };
  Banner.title = optionTitle;
  Banner.photo = optionBanner;

  return Banner;
};
