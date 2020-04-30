import strPerkImage from "../assets/perks/strPerk.png";
import endPerkImage from "../assets/perks/EndurancePerk.png";
import agiPerkImage from "../assets/perks/AgilityPerk.png";
import chaPerkImage from "../assets/perks/CharismaPerk.png";
import intPerkImage from "../assets/perks/intPerk.png";
import { Perk, QuestionType } from "../utils/types";

let strDesc =
  "The state or quality of being strong; physical power or have a capacity to resist strain or stress; durability.";
let endDesc = "The act, quality, or power of withstanding hardship or stress.";
let agiDesc = "The state or quality of being agile; nimbleness.";
let chaDesc = "Personal magnetism or charm.";
let intDesc = "The ability to acquire, understand, and use knowledge.";

export const perkList: Array<Perk> = [
  {
    level: 2,
    title: "Strength",
    image: strPerkImage,
    description: strDesc,
    questions: [],
  },
  {
    level: 0,
    title: "Endurance",
    image: endPerkImage,
    description: endDesc,
    questions: [],
  },
  {
    level: 1,
    title: "Agility",
    image: agiPerkImage,
    description: agiDesc,
    questions: [],
  },
  {
    level: 3,
    title: "Charisma",
    image: chaPerkImage,
    description: chaDesc,
    questions: [],
  },
  {
    level: 1,
    title: "Intelligence",
    image: intPerkImage,
    description: intDesc,
    questions: [
      {
        paragraph: "Brukar du lära dig ny information relativt snabbt?",
        type: QuestionType["1-5"],
      },
      {
        paragraph: "Hur lång är du?",
        type: QuestionType["input"],
      },
      {
        paragraph: "Läser du böcker?",
        type: QuestionType["rarely-often"],
      },
    ],
  },
];

// Intelligence - "The ability to acquire, understand, and use knowledge."
// - skala 1-10
// Förmåga att lär sig - är du öppen för att lära dig ny spännande information i nya områden?
// - Brukar du lära dig ny information relativt snabbt?
// Hur ofta tar du in ny information genom att läsa böcker eller på annat sätt?
// Utmanar du dig själv ofta i områden? tex köra utan GPS?
// Hur ofta networkar du och lär dig nya saker genom att konversera med nya människor?
// Gillar du att lösa problem som uppstår i jobbet eller i vardagen?
// Gör du ofta aktiv meditation/ funderar djupt på områden?
// Hur ofta använder du eller studerar ett andra språk?
// World awareness - är du intresserad av vad som händer i världen?
