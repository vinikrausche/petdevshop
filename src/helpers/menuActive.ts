type MenuOption = "" | "all" | "dogs" | "cats" | "fishes";

export const menuActivate = (option: MenuOption) => {
  const menuOptions = {
    all: false,
    dogs: false,
    cats: false,
    fishes: false,
  };

  option !== "" ? (menuOptions[option] = true) : "";

  return menuOptions;
};
