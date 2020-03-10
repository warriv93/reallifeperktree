import strPerkImage from "../assets/perks/strPerk.png";
import endPerkImage from "../assets/perks/EndurancePerk.png";
import agiPerkImage from "../assets/perks/AgilityPerk.png";
import chaPerkImage from "../assets/perks/CharismaPerk.png";
import intPerkImage from "../assets/perks/intPerk.png";
import {Perk} from "../utils/types"

export const perkList: Array<Perk> = [
  { level: 2, title: "Strength", image:  strPerkImage},
  { level: 1, title: "Endurance", image:  endPerkImage },
  { level: 1, title: "Agility", image:  agiPerkImage },
  { level: 3, title: "Charisma", image:  chaPerkImage },
  { level: 1, title: "Intelligence", image:  intPerkImage }
]



