import { create } from "d3";

const ROOT_BLUE = "#3fbed1",
  ROOT_PURPLE = "#9928AF",
  ROOT_RED = "#E72A4A";

export const colorFade = (base_color) => (min, max) => {
  const range = max - min;
  return (i) => {
    const val = ((((i - min) / range) * 128 + 127) >> 0).toString(16);
    return base_color + (val.length == 2 ? "" : "0") + val;
  };
};

export const createColorGradient = (minCol, maxCol) => (i) => {
  const gradient = create("linearGradient").attr("id", i);

  gradient.append("stop").attr("offset", "0%").attr("stop-color", minCol);
  gradient.append("stop").attr("offset", "100%").attr("stop-color", maxCol);

  return gradient;
};

export const blueFade = colorFade(ROOT_BLUE);
export const redFade = colorFade(ROOT_RED);
export const purpleFade = colorFade(ROOT_PURPLE);

const darkMode = {
  background: "#24282B",
  ticks: "#808080",
  grid: "#808080",
  title: "#F1F1F1",
  darker: "#393b3d",
  data: ["#3FBED1", "#32878E"],
  border: "#C7C5C6",
};

const darkerMode = {
  background: "#24282B",
  ticks: "#B1B1B1",
  grid: "#808080",
  title: "#666666",
  darker: "#393b3d",
  data: ["#3FBED1", "#32878E"],
  border: "#C7C5C6",
};

const lightMode = {
  background: "#FAFAFA",
  ticks: "#393b3d",
  grid: "#686868",
  title: "#414141",
  darker: "#C7C5C6",
  data: ["#3FBED1", "#32878E"],
  border: "#545454",
};

export function getPalette(mode) {
  switch (mode) {
    case "dark":
      return darkMode;
    case "darker":
      return darkerMode;
    case "light":
      return lightMode;
    default:
      throw Error(`no ${mode} palette found`);
  }
}
