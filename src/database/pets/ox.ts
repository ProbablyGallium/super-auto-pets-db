import { Ability, Trigger, Pet } from "..";

function oxAbility(level: number): Ability {
  return {
    description: `Friend ahead attacks: Gain Melon Armor and +${
      level * 2
    } attack`,
    trigger: Trigger.AfterAttack,
    triggeredBy: {
      kind: "FriendAhead",
      n: 1,
    },
    effect: {
      kind: "AllOf",
      effects: [
        {
          kind: "ApplyStatus",
          status: {
            name: "MelonArmor",
          },
          to: {
            kind: "Self",
          },
        },
        {
          kind: "ModifyStats",
          target: {
            kind: "Self",
          },
          attackAmount: level * 2,
          untilEndOfBattle: false,
        },
      ],
    },
  };
}

export const ox = {
  name: "Ox",
  tier: 3,
  baseAttack: 1,
  baseHealth: 4,
  packs: ["StandardPack"],
  level1Ability: oxAbility(1),
  level2Ability: oxAbility(2),
  level3Ability: oxAbility(3),
} as Pet;