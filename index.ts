import Devzat from "devzat";

// Some utilities that may be helpful (feel free to remove them)
import fetch from "node-fetch";
import chalk from "chalk";
import "ts-replace-all";

if (!process.env.DEVZAT_TOKEN)
  throw new Error("DEVZAT_TOKEN environment variable is not defined");
if (!process.env.DEVZAT_ADDRESS)
  throw new Error("DEVZAT_ADDRESS environment variable is not defined");

const plugin = new Devzat({
  address: process.env.DEVZAT_ADDRESS,
  token: process.env.DEVZAT_TOKEN,
  name: chalk.red("Ishan Cakeday"),
});

let cards = {
  claire: `hiii ishan!! happy birthday—you’re such a talented developer, helpful friend, and an all around joy to be around. i hope you have enjoyed your rotation around the sun and continue to spin towards greatness :))
– claire`,
  javi: `Hi Ishan! Happy Birthday!  I hope you enjoy your birthday a lot and have an awesome time! You're an amazing developer with many great projects and I look forward to get to know you better! Thanks for being very cool! :))
—Javi`,
  will: `ISHAN MY FRIEND!!!!!  HAPPY BDAY!!! YOU ARE AN AMAZING DEVELOPER AND FRIEND. KEEP CREATING!
—Will`,
  benjamin: `Happy birthday Ishan! You are such an incredible person and friend, it's been amazing working on Devzat plugins with you. I can't wait to see what you do next!
- Benjamin`,
  pranav: `HAPPY BIRTHDAY ISHAN!!!!! it’s been so awesome to live just a mile away over the past year and ive had so much fun and learned so much from our walks/mini hackathons. installing ubuntu on a rpi and playing the zephyr video on firefox in 4k was so fun and i hope keep doing a bunch of other mini hackathons! devzat & all your projects are amazing and keep hacking!!
– Pranav`,
  charlie: `Happy Birthday, Ishan! You're a kickass developer, and our conversations are always fun. Keep making awesome stuff!
— Charlie`,
  bash: `HAPPY BIRTHDAY MR AWESOME CODERMAN FREN! I had so much fun with you on Zephyr and I can't wait until next time we see each other irl. I love seeing all the crazy cool things you build & you're an inspiration! Have an amazing birthday! - Bash`,
  toby: `HAPPY BIRTDHAY ISHAN!!! I hope you have a wonderful day! Thank you so much for constantly being epic, and never stop making awesome projects!!!!
  -Toby`,
  fayd: `Hiii Ishan!! Happy Birthday to you mate! You are a great person and I love the projects you build! You really contribute a lot in making Hack Club a better place. I hope to see you in-person soon! Until then, keep hacking and enjoy your day!
  — Fayd`,
  ian: `Happy Birthday Ishan!! You're super incredible, you make the best projects, and you're always helping other people. It was awesome to meet you in-person on Zephyr and making the logo for Zoogle. Have a happy birthday!
  — Ian`,
  matthew: `happy birthday ishan!!!! you are so weird and kind and smart and i'm lucky to know you. thanks for doing what you do and being a part of hack club. hope you have a great 17th birthday. :) — matthew  `,
  tej: `ISHAN HAPPY BIRTHDAYYY! man you are one heck of a human (or a duck? idk.) , a great dev and friend :)) enjoy your day man.
  — tej`,
  harsh: `Happy birthday Ishan!!!! It has been great knowing you at Hack Club and u make the community so awesome! I love the projects that u make and the person you are! Keep making amazing things, hope we meet when u come to India, have an amazing day today :)
  -Harsh`,
  belle: `Happy Birthday Ishan!! You're a really really fun person to be around and always inspire me with how excited you are to learn and build! Keep being super cool and amazing :)) Ps. your display name game is unbeatable.  `,
};

plugin.command(
  {
    name: "lscards",
    info: "See all the cards people have written",
    argsInfo: "",
  },
  (event) => {
    return JSON.stringify(Object.keys(cards));
  }
);

plugin.command(
  {
    name: "card",
    info: "Get a card",
    argsInfo: "<card-name>",
  },
  (event) => {
    //@ts-ignore
    return cards[event.args].replaceAll("\n", "\n\n");
  }
);
