import { colors } from "configs/colors";

export const checkColor = (color) => {
  if (color === colors.categoryBlue) return colors.categoryBackgroundBlue;
  else if (color === colors.categoryLightGreen) return colors.categoryBackgroundLightGreen;
  else if (color === colors.categoryViolet) return colors.categoryBackgroundViolet;
  else if (color === colors.categoryGreen) return colors.categoryBackgroundGreen;
  else if (color === colors.categoryRed) return colors.categoryBackgroundRed;
  else if (color === colors.categoryFucsia) return colors.categoryBackgroundFucsia;
  else if (color === colors.categoryOrange) return colors.categoryBackgroundOrange;
  else if (color === colors.categoryPink) return colors.categoryBackgroundPink;
  else if (color === colors.categoryYellow) return colors.categoryBackgroundYellow;
  else if (color === colors.categoryTiffany) return colors.categoryBackgroundTiffany;
  else return null;
};