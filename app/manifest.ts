import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DigitalSolutions - Claude Simo",
    short_name: "DigitalSolutions",
    description:
      "Professionelle Webentwicklung, Landing Pages und Web-Applikationen.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#174374",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
