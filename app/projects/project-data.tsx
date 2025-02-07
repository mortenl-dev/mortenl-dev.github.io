export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Weafy",
    year: 2024,
    description:
      "Weafy is an ambient environment monitoring solution that keeps track of plant moisture levels, air quality, temperature, humidity, and ambient light levels in your environment. It provides real-time data analyzed using custom ML models to alert you when it's best to water your plants to provide the best results and care.",
    url: "https://github.com/AdamSotak/weafy",
  },
  {
    title: "StoxeBot",
    year: 2025,
    description:
      "StoxeBot is a discord bot which utilizes different API's to display stock market data.",
    url: "https://github.com/mortenl-dev/StoxeBot",
  },
  {
    title: "View all my other projects",
    year: 2024,
    description:
      "If you wish to take a look at some of my minor projects, please visit my Github.",
    url: "https://github.com/mortenl-dev",
  },
];
