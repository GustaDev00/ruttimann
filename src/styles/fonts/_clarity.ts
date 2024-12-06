import localFont from "next/font/local";

export const clarityCity = localFont({
  variable: "--clarity",
  src: [
    {
      path: "../../../public/fonts/clarity/ClarityCity-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../public/fonts/clarity/ClarityCity-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/clarity/ClarityCity-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/clarity/ClarityCity-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/clarity/ClarityCity-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/clarity/ClarityCity-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
  display: "swap",
});
