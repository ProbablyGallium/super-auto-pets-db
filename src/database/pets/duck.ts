import { Ability, Trigger, Pet } from "..";

function duckAbility(level: number): Ability {
  return {
    description: `Sell: Give shop animals +${level}/+${level}`,
    trigger: Trigger.Sell,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "EachShopAnimal",
      },
      attackAmount: level,
      healthAmount: level,
      untilEndOfBattle: false,
    },
  };
}

export const duck = {
  name: "Duck",
  tier: 1,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack"],
  level1Ability: duckAbility(1),
  level2Ability: duckAbility(2),
  level3Ability: duckAbility(3),
} as Pet;