import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function penguinAbility(level: number): Ability {
  return {
    description: `End turn: Give three Lvl. 2 and 3 friends +${level}/+${level}`,
    trigger: Trigger.EndOfTurn,
    triggeredBy: {
      kind: "Player",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "Level2And3Friends",
        n: 3,
      },
      attackAmount: level,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const penguin: Pet = {
  ...getPetIdentifiers("Penguin"),
  image: {
    source: "noto-emoji",
    commit: "e022fd6573782431ac9a65b520376b57511c31cd",
    unicodeCodePoint: "\u{1F427}",
  },
  tier: 4,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: penguinAbility(1),
  level2Ability: penguinAbility(2),
  level3Ability: penguinAbility(3),
};
