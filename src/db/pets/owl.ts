import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function owlAbility(level: number): Ability {
  return {
    description: `Sell: Give a random friend +2/+2`,
    trigger: Trigger.Sell,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "RandomFriend",
        n: 1,
      },
      attackAmount: 2,
      healthAmount: 2,
      untilEndOfBattle: false,
    },
  };
}

export const owl: Pet = {
  ...getPetIdentifiers("Owl"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F989}",
  },
  tier: 3,
  baseAttack: 5,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: owlAbility(1),
  level2Ability: owlAbility(2),
  level3Ability: owlAbility(3),
};
