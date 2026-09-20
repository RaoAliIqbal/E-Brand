import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Storybound House",
    short_name: "Storybound",
    description: "Premium ghostwriting and author services.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00996d",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
