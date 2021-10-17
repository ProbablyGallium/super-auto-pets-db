import { Ability, Pet, Trigger } from "..";

function antAbility(level: number): Ability {
  return {
    description: `Faint: Give a random friend +${level * 2}/+${level}`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      attackAmount: level * 2,
      healthAmount: level,
      target: {
        kind: "RandomFriend",
        n: 1,
      },
      untilEndOfBattle: false,
    },
  };
}

export const ant = {
  name: "Ant",
  tier: 1,
  baseAttack: 2,
  baseHealth: 1,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: antAbility(1),
  level2Ability: antAbility(2),
  level3Ability: antAbility(3),
} as Pet;