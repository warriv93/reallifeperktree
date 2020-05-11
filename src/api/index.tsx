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

export const perkQuestions = {
  agility: [
    {
      section: "Agility",
      paragraph: "When bending over, can you reach your toes?",
      type: QuestionType["1-5"],
    },
    {
      section: "Agility",
      paragraph: "Do you run for exercise?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Swiftness",
      paragraph: "Do you exercise any martial art?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Balance",
      paragraph:
        "How often do you do balance exercises, for example obstacle course or Yoga?",
      type: QuestionType["rarely-often"],
    },
  ],
  strength: [
    // {
    //   paragraph: "Do you exercise, for example at a gym?",
    //   type: QuestionType["rarely-often"],
    // },
    // {
    //   section: "Build",
    //   paragraph: "What is the maximum weight you can lift on a bench press?",
    //   type: QuestionType.input,
    //   placeholder: "kg",
    // },
    {
      section: "BMI",
      paragraph: "How tall are you?",
      type: QuestionType.input,
      placeholder: "cm",
    },
    {
      section: "BMI",
      paragraph: "How much do you weigh?",
      type: QuestionType.input,
      placeholder: "kg",
    },
    // {
    //   section: "Build",
    //   paragraph: "How much does your biceps measure around?",
    //   type: QuestionType.input,
    //   placeholder: "cm",
    // },
    // {
    //   section: "Build",
    //   paragraph: "What does your shoulder measure across?",
    //   type: QuestionType.input,
    //   placeholder: "cm",
    // },
    // {
    //   section: "Build",
    //   paragraph: "How much does your neck measure around?",
    //   type: QuestionType.input,
    //   placeholder: "cm",
    // },
  ],
  endurance: [
    {
      section: "Stamina",
      paragraph: "Do you exercise, for example at a gym?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Stamina",
      paragraph: "Do you hold your breath underwater?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Stamina",
      paragraph: "Do you run for exercise?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Stamina",
      paragraph: "How far can you run before getting exhausted?",
      type: QuestionType["input"],
      placeholder: "km",
    },
    {
      section: "Stamina",
      paragraph: "Do you attend a sport?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Stamina",
      paragraph: "Do you feel healthy and alert?",
      type: QuestionType["1-5"],
    },
    {
      section: "Mental health",
      paragraph: "Do you read books or similar for entertainment?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Mental health",
      paragraph: "Do you watch movies or similar entertainment?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Mental health",
      paragraph: "Do you play games, for example board games or computer game?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Mental health",
      paragraph: "Do you meet friends or other people?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Mental health",
      paragraph: "Do you travel and expose yourself to new cultures?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Diet",
      paragraph:
        "Do you eat all the three meals breakfast, lunch and dinner every day?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Diet",
      paragraph: "Do you eat homecooked food / healthy food?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Diet",
      paragraph: "Do you eat fastfood?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Diet",
      paragraph: "Do you have normal blood preasure?",
      type: QuestionType["1-5"],
    },
    {
      section: "Diet",
      paragraph:
        "Do you have any serious illness, allergies, for example pollen or diabetes?",
      type: QuestionType["1-5"],
    },
    {
      section: "Diet",
      paragraph:
        "Do you have in your family any serious illness, for example cancer?",
      type: QuestionType["1-5"],
    },
  ],
  charisma: [
    {
      section: "Conversation",
      paragraph: "Are you great at speaking infront of a group?",
      type: QuestionType["1-5"],
    },
    {
      section: "Conversation",
      paragraph: "Do you speak infront of groups?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Conversation",
      paragraph: "Are you great at formulating sentances?",
      type: QuestionType["1-5"],
    },
    {
      section: "Conversation",
      paragraph: "Do you ask open ended questions in conversations?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Conversation",
      paragraph: "Do you use body language to strenghen your point?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Conversation",
      paragraph:
        "Do you keep eye contact with the one you are conversing with?",
      type: QuestionType["rarely-often"],
    },
    {
      section: "Conversation",
      paragraph: "Generally do people in your surrounding like you?",
      type: QuestionType["1-5"],
    },
    {
      paragraph: "Is your Self-esteem great?",
      type: QuestionType["1-5"],
    },
    {
      paragraph: "Are you often optimistic?",
      type: QuestionType["rarely-often"],
    },
    {
      paragraph: "Are you fully present and engaged in social situations?",
      type: QuestionType["rarely-often"],
    },
    {
      paragraph: "Do you exercise conscious presence meditation?",
      type: QuestionType["rarely-often"],
    },
  ],
  intelligence: [
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
      paragraph: "Are you open to learning new fields / subjects?",
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
    {
      section: "IQ",
      paragraph: "What is your IQ? (if you don't know just leave it blank)",
      type: QuestionType["input"],
      placeholder: "IQ",
    },
  ],
};

export const perkList: Array<Perk> = [
  {
    level: 0,
    title: "Strength",
    image: strPerkImage,
    description: strDesc,
    questions: perkQuestions.strength,
  },
  {
    level: 0,
    title: "Endurance",
    image: endPerkImage,
    description: endDesc,
    questions: perkQuestions.endurance,
  },
  {
    level: 0,
    title: "Agility",
    image: agiPerkImage,
    description: agiDesc,
    questions: perkQuestions.agility,
  },
  {
    level: 0,
    title: "Charisma",
    image: chaPerkImage,
    description: chaDesc,
    questions: perkQuestions.charisma,
  },
  {
    level: 0,
    title: "Intelligence",
    image: intPerkImage,
    description: intDesc,
    questions: perkQuestions.intelligence,
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
