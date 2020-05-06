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
    questions: [
      {
        paragraph: "Do you exercise, for example at a gym?",
        type: QuestionType["rarely-often"],
      },
      {
        paragraph: "Do you train yourself to hold your breath underwater?",
        type: QuestionType["rarely-often"],
      },
    ],
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
        paragraph: "Do you learn new information relatively quickly?",
        type: QuestionType["1-5"],
      },
      {
        paragraph: "Do you read books?",
        type: QuestionType["rarely-often"],
      },
      {
        paragraph: "How often do you seek out to learn new information?",
        type: QuestionType["rarely-often"],
      },
      {
        paragraph: "How often do you seek out to learn new skills?",
        type: QuestionType["rarely-often"],
      },
      {
        paragraph: "Are you open to learn new fields?",
        type: QuestionType["1-5"],
      },
      {
        paragraph:
          "Do you challenge your self, by for example driving without an GPS?",
        type: QuestionType["rarely-often"],
      },
      {
        paragraph:
          "Do you converse/network with other people with the goal of learning new things?",
        type: QuestionType["rarely-often"],
      },
      {
        paragraph:
          "Do you like to solve problems which arise at work and in the everyday?",
        type: QuestionType["1-5"],
      },
      {
        paragraph: "Do you actively meditate / think deeply on a subject?",
        type: QuestionType["rarely-often"],
      },
      {
        paragraph: "Do you use / study a second language?",
        type: QuestionType["rarely-often"],
      },
      {
        paragraph: "Do you keep up with what happens in the world?",
        type: QuestionType["rarely-often"],
      },
      {
        paragraph: "Do you like to study the world?",
        type: QuestionType["1-5"],
      },
      {
        paragraph: "Do you like to learn about subjects, like history?",
        type: QuestionType["1-5"],
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
