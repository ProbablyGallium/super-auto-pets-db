import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function catAbility(level: number): Ability {
  let multiplier = "";
  switch (level) {
    case 1:
      multiplier = "doubled";
      break;
    case 2:
      multiplier = "tripled";
      break;
    case 3:
      multiplier = "quadrupled";
      break;
  }
  return {
    description: `Food with Health and Attack effects are ${multiplier}.`,
    trigger: Trigger.Hurt,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "FoodMultiplier",
      amount: level + 1,
    },
  };
}

export const cat: Pet = {
  ...getPetIdentifiers("Cat"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F408}\u{200D}\u{2B1B}",
  },
  tier: 6,
  baseAttack: 4,
  baseHealth: 5,
  packs: ["StandardPack"],
  level1Ability: catAbility(1),
  level2Ability: catAbility(2),
  level3Ability: catAbility(3),
};
