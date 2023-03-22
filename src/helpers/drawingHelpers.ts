type ImageName = "player" | "bullet";

export const images: Record<ImageName, string> = {
  player:
    "https://steamuserimages-a.akamaihd.net/ugc/3336348870692605210/2DB65000D1AE5B34BCEC2E3E91A27537B3EFC057/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
  bullet:
    "https://user-images.githubusercontent.com/97990557/226824371-87cc9b0c-ff7a-47b7-8aa7-f047f6267dff.png",
};

type ColorName = "border" | "background";

export const colorPalette: Record<ColorName, string> = {
  border: "green",
  background: "black",
};
