import strPerkImage from "../assets/perks/strPerk.png";
import endPerkImage from "../assets/perks/EndurancePerk.png";
import agiPerkImage from "../assets/perks/AgilityPerk.png";
import chaPerkImage from "../assets/perks/CharismaPerk.png";
import intPerkImage from "../assets/perks/intPerk.png";
import {Perk} from "../utils/types";

let strDesc = "The state or quality of being strong; physical power or have a capacity to resist strain or stress; durability.";
let endDesc = "The act, quality, or power of withstanding hardship or stress.";
let agiDesc = "The state or quality of being agile; nimbleness.";
let chaDesc = "Personal magnetism or charm.";
let intDesc = "The ability to acquire, understand, and use knowledge.";

export const perkList: Array<Perk> = [
  { level: 2, title: "Strength", image:  strPerkImage, description: strDesc},
  { level: 1, title: "Endurance", image:  endPerkImage, description: endDesc },
  { level: 1, title: "Agility", image:  agiPerkImage, description: agiDesc },
  { level: 3, title: "Charisma", image:  chaPerkImage, description: chaDesc },
  { level: 1, title: "Intelligence", image:  intPerkImage, description: intDesc }
]



